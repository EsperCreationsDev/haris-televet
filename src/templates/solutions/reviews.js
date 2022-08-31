import React from 'react'
import styled from 'styled-components'

// Components
import Container from '../../components/container'
import Review from '../../components/review/index'
import Carousel from '../../components/review/carousel'

const ReviewsComponent = ({
    items
}) => {
    return (
        <Section>
            <Container>
                <Wrapper>
                    <Carousel>
                        {items.map(({
                            reviewContent: {
                                reviewAuthor: name,
                                reviewContent: description,
                                reviewRole: role,
                                reviewAvatar: background
                            }
                        }, index) => (
                            <Review
                                key={index}
                                name={name}
                                role={role}
                                description={description}
                                background={background}
                            />
                        ))}
                    </Carousel>
                </Wrapper>
            </Container>
        </Section>
    )
}

export default ReviewsComponent

// Styled Components
const Section = styled.section`
    padding-top:3rem;
    padding-bottom:3rem;
    @media (min-width:992px) {
        padding-top:6rem;
        padding-bottom:6rem;
    }
`
const Wrapper = styled.div`
    background-color:${props => props.theme.color.grey[50]};
    border-radius:1.5rem;
    padding-top:3.75rem;
    padding-bottom:3.75rem;
    .theme--dark & {
        background-color:${props => props.theme.color.primary.dark};
        color:#fff;
    }
    @media (min-width:992px) {
        padding-top:5.25rem;
        padding-bottom:5.25rem; 
    }
`