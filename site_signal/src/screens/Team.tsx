import React from "react";
import "../screens/css/team.css";
import { ParticlesContainer } from "../components/ParticlesContainer";
import { Navbar } from "../components/Navbar/Navbar";
import { Header } from "../components/Header/Header";

export const Team = () =>{
	return (
		<div className="team">
			<ParticlesContainer/>
			<Navbar/>
			<Header 
				title="Conheça a Signal Júnior e dê o próximo passo com seu negócio"
				text="Conheça um pouco mais sobre a nossa empresa, o que é o Movimento Empresa Júnior e nossos talentosos membros."
			/>
		</div>
	);
};