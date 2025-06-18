import { Accordion, AccordionDetails, AccordionSummary, Container, Paper, Stack, Typography } from '@mui/material';

// サンプルデータ
const restaurants = [
    {
        id: 1,
        name: 'イタリアン トラットリア',
        description: '本場イタリアの味を再現した本格イタリアン',
        rating: 4.5,
    },
    {
        id: 2,
        name: '和食 さくら',
        description: '季節の食材を使用した創作和食',
        rating: 4.8,
    },
    {
        id: 3,
        name: 'フレンチ ル・シェフ',
        description: 'フランスの伝統的な料理を提供',
        rating: 4.3,
    },
];

const RestaurantList = () => {
    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Accordion>
                <AccordionSummary
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography component="span">Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    <Stack sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
                        {restaurants.map((restaurant) => (
                            <Paper
                                key={restaurant.id}
                                elevation={2}
                                sx={{
                                    p: 3,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    // width: '100%',
                                    gap: 1,
                                    '&:hover': {
                                        boxShadow: 4,
                                        cursor: 'pointer',
                                    },
                                }}
                            >
                                <Typography variant="h6" component="h2">
                                    {restaurant.name}
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    {restaurant.description}
                                </Typography>
                                <Typography variant="body2" color="primary">
                                    評価: {restaurant.rating} / 5.0
                                </Typography>
                            </Paper>
                        ))}
                    </Stack>
                </AccordionDetails>
            </Accordion>
        </Container>
    );
};

export default RestaurantList;
