import React from "react";
import './Main.css';
import Button from '../../UI/Button/Button'
import { useNavigate } from "react-router-dom";

export default function Main() {
    const navigate = useNavigate();

    const getStarted = () => {
        navigate("/quiz");
    };

    return (
        <div className="main">
            <div className="main__block">
                <div>
                    <h1>Quiz from Tamirlan</h1>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus quam nisi provident velit molestias itaque laboriosam ipsa atque delectus! Laborum dolorem doloremque saepe libero voluptate, minus vel culpa deserunt delectus?
                    Eligendi quaerat ex quam tenetur quos? Repellendus fugiat, laudantium provident voluptatibus omnis consectetur dolore sit quidem eveniet perspiciatis magnam autem esse placeat pariatur, odit est molestias repudiandae sequi quod qui.
                    Quis recusandae qui perspiciatis culpa! Sapiente consequuntur labore tempore vel necessitatibus, quam dolor consequatur perspiciatis ex quos iure aliquam numquam quas voluptatem. Doloribus consequatur magni incidunt laborum. Libero, deserunt perferendis!
                    Eligendi voluptatibus iste odit eveniet accusamus similique, non ipsa quas modi libero animi eum? Ullam soluta ex possimus libero laudantium, labore voluptates totam deserunt, laborum sint id cum officiis minima!
                    Quia nam iure quos debitis at impedit ex sunt repellat recusandae doloremque nemo, cupiditate, expedita dolore libero maxime neque. Dolore repellat deserunt voluptatum dolorum placeat sequi modi eligendi voluptates reiciendis?</p>
                </div>
                <div>
                    <Button onClick={() => getStarted()} >Начать</Button>
                </div>
            </div>
        </div>  
    );
};