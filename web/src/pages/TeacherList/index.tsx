import React, { FormEvent, useEffect, useState } from "react";
import { PageHeader } from "../../components/PageHeader";


import './styles.css'
import { TeacherItem, Teacher } from "../../components/TeacherItem";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import api from "../../services/api";





export const TeacherList = () => {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');


    const showAllTeachers = async () => {
        try {
          const response = await api.get('classes');
          const teachers = response.data;
          setTeachers(teachers);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        showAllTeachers();
      }, []);

    const searchTeachers = async (e: FormEvent) => {
        e.preventDefault();

        const params = {
            subject: subject ? subject : undefined,
            week_day: week_day ? week_day : undefined,
            time: time ? time : undefined
        }
        try{
            const response = await api.get('classes', {params})
            setTeachers(response.data);
        }catch(error){
            console.log(error)
        }
        
    };

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title='Estes são os professores disponíveis.'>
                <form id="search-teachers" onSubmit={searchTeachers} >
                    <Select
                        name="subject"
                        label="Matéria"
                        value={subject}
                        onChange={(e) => { setSubject(e.target.value) }}
                        options={[
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Química', label: 'Química' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Artes', label: 'Artes' },
                            { value: 'História', label: 'História' },
                            { value: 'Filosofia', label: 'Filosofia' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Inglês', label: 'Inglês' },
                        ]}
                    />
                    <Select
                        name="week_day"
                        label="Dia da semana"
                        value={week_day}
                        onChange={(e) => { setWeekDay(e.target.value) }}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />

                    <Input
                        type="time"
                        name="time"
                        label="Hora"
                        value={time}
                        onChange={(e) => { setTime(e.target.value) }}
                    />

                    <button type="submit">Buscar</button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />;
                })}
            </main>
        </div>
    );
};