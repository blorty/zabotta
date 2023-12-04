import React from 'react';
import { ZabottaServices, ZabottaProjects } from '../../ZabottaData/ZabottaData';
import { Section, Heading, CardContainer, Card, CardContent, CardImage, CardTitle, CardDescription, cardVariants, containerVariants } from './HomeStyled';

const HomePage = () => {
    return (
        <div>
            <Section initial="hidden" animate="show">
                <Heading>Our Services</Heading>
                <CardContainer variants={containerVariants}>
                    {ZabottaServices.services.map(service => (
                        <Card key={service.id} variants={cardVariants} initial="offscreen" whileInView="onscreen">
                            <CardContent>
                                <CardImage src={service.options[0].image} alt={service.options[0].title} />
                                <CardTitle>{service.options[0].title}</CardTitle>
                                <CardDescription>{service.options[0].description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </CardContainer>
            </Section>
            <Section>
                <Heading>Recent Projects</Heading>
                <CardContainer>
                    {ZabottaProjects.projects.map(project => (
                        <Card key={project.id} variants={cardVariants} initial="offscreen" whileInView="onscreen">
                            <CardContent>
                                <CardImage src={project.image} alt={project.title} />
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </CardContainer>
            </Section>
            {/* Continue with other sections as needed */}
        </div>
    );
};

export default HomePage;
