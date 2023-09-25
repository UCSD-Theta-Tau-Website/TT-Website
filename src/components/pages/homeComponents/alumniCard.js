import React from "react";
import '../../../style/alumniCard.css'

const AlumniCard = ({ name, role, response, companies, imageUrl }) => {
    return (
        <div className="alumniCard">
            <div className="alumniCardLeft">
                <img src={imageUrl} alt={name}/>
            </div>
            <div className="alumniCardRight">
                <div className="alumniName">{name}</div>
                <div className="alumniRole">{role}</div>
                <div className="alumniResponse">{response}</div>
                <div className="alumniCompanies">
                    {companies.map((company, index) => (
                        <img key={index} src={company.imageUrl} alt={company.name} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AlumniCard;