import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// let data = [
//     { section: "Новости", link: "/", chapter: null },
//     { section: "О нас", link: "/about/", chapter: [{ name: "Правоустанавливающие документы", link: "docs/" }, { name: "Общие сведения", link: "general/" }, { name: "Реквизиты УК", link: "props/" }] },
//     { section: "Жителям", link: "/citizen/", chapter: [{ name: "Правовая база", link: "base/" }, { name: "Образцы заявлений", link: "example/" }, { name: "Паспортный стол", link: "passport/" }, { name: "Оплата услуг ЖКХ", link: "pay/" }, { name: "Отчет о проделанной работе", link: "reports" }] }
// ];

// function Page(props) { //Вывод всей страницы
//     return (
//         <div>
//             <h1>Страницы сайта</h1>
//             <div className="page">
//                 {props.data.map(function (item, i) { return (<Section key={i} data={item} />) })}
//             </div>
//         </div>
//     )
// }
// function EditPage() {
//     return (
//         <div>
//             <h1>Редактирование страницы</h1>
//             <div className="blockEdit">
//                 <span>Название</span>
//                 <input type="text" name="name" id="" />
//                 <span>Ссылка</span>
//                 <input type="text" name="link" id="" />
//                 <span className="spanText">Текст</span>
//                 <textarea name="text" id="">qwertytuyi</textarea>
//             </div>
//             <button>Сохранить</button>
//         </div>
//     )
// }

// function Section(props) { //Вывод блока с заглавием
//     let chapter;
//     if (props.data.chapter !== null) {
//         chapter = <div className="content">{props.data.chapter.map(function (item, i) { return (<Chapter key={i} data={item} sectionLink={props.data.link} />) })}</div>;
//     } else {
//     }
//     function edit(){
//         alert("jknjk")
//     }
//     return (
//         <div className="block">
//             <div className="nameSection"><a onClick={edit} href={props.data.link}>{props.data.section}</a></div>
//             {chapter}
//         </div>
//     );
// }
// function Chapter(props) { //Вывод элементов блока
//     return (<div className="chapter"><a href={props.sectionLink + props.data.link}>{props.data.name}</a></div>)
// }
let data = [
    { section: "Новости", link: "/", chapter: null },
    { section: "О нас", link: "/about/", chapter: [{ name: "Правоустанавливающие документы", link: "docs/" }, { name: "Общие сведения", link: "general/" }, { name: "Реквизиты УК", link: "props/" }] },
    { section: "Жителям", link: "/citizen/", chapter: [{ name: "Правовая база", link: "base/" }, { name: "Образцы заявлений", link: "example/" }, { name: "Паспортный стол", link: "passport/" }, { name: "Оплата услуг ЖКХ", link: "pay/" }, { name: "Отчет о проделанной работе", link: "reports" }] }
];
ReactDOM.render(<App data={data} />, document.getElementById("root"));
// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
