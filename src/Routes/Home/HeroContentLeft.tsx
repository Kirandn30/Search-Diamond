import { Overlay, Container, Title, Button, Text } from '@mantine/core';
import classes from './HeroContentLeft.module.css';
import { useNavigate } from 'react-router-dom';

export function HeroContentLeft() {

    const navigate = useNavigate()
    

    return (
        <div className={classes.hero}>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
                opacity={1}
                zIndex={0}
            />
            <Container className={classes.container} size="md">
                <Title className={`${classes.title}`} color='white'>Welcome to Mahala Almas</Title>
                <Text className={classes.description} size="xl" mt="xl">   
                </Text>
                <Button
                    variant="gradient"
                    size="lg"
                    radius="xl"
                    className={classes.control}
                    onClick={() => navigate("/diamond-type")}
                >
                    Search Diamonds
                </Button>
            </Container>
        </div>
    );
}