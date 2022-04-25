import Job from "./Job";
import "./Jobs.css";

const Jobs = (props) => {
    return (
        <div className="container">
            <Job
                className="yellow"
                title="Agent de sécurité - Pantin"
                contractType="CDI"
                country="France"
                city="Pantin"
            />
            <Job
                className="red"
                title="Full Time Sales Associate - Sydney Boutique"
                contractType="CDI"
                country="Australie"
                city="Sydney"
            />
            <Job
                className="blue"
                title="Responsable d'Atelier(H/F)"
                contractType="CDI"
                country="France"
                city="Paris"
            />
            <Job
                className="red"
                title="Chef de Projet"
                contractType="CDD"
                country="France"
                city="Paris"
            />
            <Job
                className="yellow"
                title="Développeur React.js"
                contractType="CDD"
                country="France"
                city="Paris"
            />
            <Job
                className="blue"
                title="Sales Associate Stockholm"
                contractType="CDI"
                country="Suède"
                city="Stockholm"
            />
            <Job
                className="green"
                title="Vendeur/se - Crans Montana"
                contractType="CDI"
                country="Suisse"
                city="Crans-Montana"
            />
            <Job
                className="blue"
                title="CRM & Data Quality Analyst"
                contractType="CDI"
                country="USA"
                city="New-York"
            />
            <Job
                className="green"
                title="Vendeur/se - Crans Montana"
                contractType="CDI"
                country="France"
                city="Pantin"
            />
        </div>
    );
};

export default Jobs;
