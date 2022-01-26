import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App(props) { //Вывод всей страницы
    const [edit, setEdit] = useState(false);
    function EditPage() {
        return (
            <div>
                <h1>Редактирование страницы</h1>
                <div className="blockEdit">
                    <span>Название</span>
                    <input type="text" name="name" id="" />
                    <span>Ссылка</span>
                    <input type="text" name="link" id="" />
                    <span className="spanText">Текст</span>
                    <textarea name="text" id="">qwertytuyi</textarea>
                </div>
                <button>Сохранить</button>
            </div>
        )
    }
    function Section(props) { //Вывод блока с заглавием
        let chapter;
        if (props.data.chapter !== null) {
            chapter = <div className="content">{props.data.chapter.map(function (item, i) { return (<Chapter key={i} data={item} sectionLink={props.data.link} />) })}</div>;
        } else {
        }
        function editChapter() {
            setEdit(true);
        }
        return (
            <div className="block">
                <div className="nameSection"><a onClick={editChapter} href={props.data.link}>{props.data.section}</a></div>
                {chapter}
            </div>
        );
    }
    function Chapter(props) { //Вывод элементов блока
        return (<div className="chapter"><a href={props.sectionLink + props.data.link}>{props.data.name}</a></div>)
    }
    return (
        <div>
            <h1>Страницы сайта</h1>
            <div className="page">
                {props.data.map(function (item, i) { return (<Section key={i} data={item} />) })}
            </div>
        </div>
    )
}


export default App;
