import React from 'react';

function ProjectsSection() {
    return (
        <div className="projects-section">
            <div className="project">
                <h2>Proyecto 1 - Calidad del Aire en Valencia</h2>
                <div className="texto-proyecto">
                    <p className="p-proyecto centrado">Proyecto Final de Curso - Especialización en IA y Big Data</p>
                    <p className="p-proyecto textoedit">
                        {/* DESCRIPCIÓN DEL PROYECTO - RELLENAR AQUÍ */}
                        El proyecto emplea un enfoque integral para monitorizar la calidad del aire en Valencia,
                        combinando diversas tecnologías y fuentes de datos.

                        <br /><br />

                        Se utilizan cámaras de tráfico, conectadas mediante RTSP y gestionadas con scripts en Python,
                        para capturar imágenes que son almacenadas en Azure Blob Storage. Estas imágenes se mejoran
                        con Real-ESRGAN, una red generativa adversarial que aumenta su resolución, y se analizan con YOLO,
                        un algoritmo de detección de objetos en tiempo real.

                        <br /><br />

                        Los datos ambientales se recogen en tiempo real desde APIs de sensores que miden contaminantes
                        y variables meteorológicas. Estos datos se almacenan en la nube y se integran usando Azure Data Factory,
                        que los transforma en distintas capas (Raw, Processed y Gold) dentro de un esquema lakehouse
                        gestionado en Databricks.

                        <br /><br />

                        Para el análisis de datos se emplean dashboards en Power BI y técnicas de Machine Learning,
                        incluyendo modelos de clasificación y regresión para predecir el índice de calidad del aire
                        y los niveles de ozono.

                        <br /><br />

                        La documentación científica se gestiona mediante Elasticsearch y se accede con un sistema
                        RAG (Retrieval-Augmented Generation) implementado en Flask, que permite recuperar y presentar
                        información relevante a través de un chatbot que combina búsqueda semántica y generación de
                        respuestas usando el modelo Ollama.
                    </p>

                </div>
                <br />
                <div className="video-proyecto">
                    <iframe
                        width="71%"
                        height="500px"
                        src="https://www.youtube.com/embed/Cgiwk8_g-iM"
                        title="Proyecto Calidad del Aire Valencia"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                    </iframe>
                </div>
            </div>

            <div className="project">
                <h2>Proyecto 2 - Sistema de Gestión Ganadera</h2>
                <div className="texto-proyecto">
                    <p className="p-proyecto centrado">Proyecto destinado a una empresa de ganadería</p>
                    <p className="p-proyecto textoedit">
                        Este sitio web ha sido creado para una empresa ganadera, con el objetivo de llevar un control exhaustivo de todos los animales de la ganadería. En él, se pueden añadir, modificar y, en caso de venta o fallecimiento, marcar como "Inactivo" a los animales, los cuales aparecerán en una sección dedicada exclusivamente a los animales inactivos. Además, se puede consultar la información detallada de cada animal.<br /><br />

                        El sistema también permite gestionar las crías por cada madre. Si una madre fallece o se vende, se mueve a una sección de madres "Inactivas", lo que facilita el seguimiento y control de las crías, incluso cuando sus madres ya no están activas.<br /><br />

                        En cuanto al diseño, el cliente solicitó que fuera muy básico y responsive, para facilitar su uso desde el móvil, ya que se trata de una web de uso privado que no requiere un diseño muy elaborado. La web está adaptada para funcionar en cualquier dispositivo, asegurando una experiencia de usuario óptima tanto en móviles como en tabletas y computadoras de escritorio. <br /> <br />

                        Para ilustrar el funcionamiento del sistema, se han añadido capturas de pantalla, ya que la web está en producción y contiene datos reales que no pueden ser publicados.
                    </p>
                </div>
                <div className="img-proyecto" />
            </div>

            <div className="futuros-proyectos">
                <h2>Aquí iré publicando mis proyectos futuros más profesionales</h2>
                <h3>En GitHub tengo proyectos los cuales no son profesionales</h3>
            </div>
        </div>
    );
}

export default ProjectsSection;