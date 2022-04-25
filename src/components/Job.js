import "./Jobs.css";

const Job = (props) => {
    return (
        <div className={props.className}>
            <div>
                <h2>{props.title}</h2>
            </div>
            <div>
                {props.contractType}-{props.country}-{props.city}
            </div>
        </div>
    );
};

export default Job;
