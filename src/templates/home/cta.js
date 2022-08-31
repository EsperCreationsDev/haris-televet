import React from 'react'
import styled from 'styled-components'

// Layout Components
import Container from '../../components/container'

// Components
import Cta from '../../components/cta/variantOne'

const CtaComponent = () => {
    return (
        <Section>
            <Container>
                <Cta/>
            </Container>
        </Section>
    )
}

export default CtaComponent

// Styled Components
const Section = styled.section`
    background-color:#fff;
    padding-top:6.25rem;
    padding-bottom:6.25rem;
    @media (min-width:992px) {
        padding-top:7rem;
        padding-bottom:8.5rem;
    }
`
