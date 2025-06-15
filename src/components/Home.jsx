import AddIcon from '@mui/icons-material/Add';
import { Box, Container, Fab, Paper, Typography } from '@mui/material';

function Home() {
    // サンプルデータ
    const items = [
        { id: 1, title: 'アイテム 1', description: 'これは最初のアイテムの説明です。' },
        { id: 2, title: 'アイテム 2', description: 'これは2番目のアイテムの説明です。' },
        { id: 3, title: 'アイテム 3', description: 'これは3番目のアイテムの説明です。' },
        { id: 4, title: 'アイテム 4', description: 'これは4番目のアイテムの説明です。' },
        { id: 5, title: 'アイテム 5', description: 'これは5番目のアイテムの説明です。' },
        { id: 6, title: 'アイテム 6', description: 'これは6番目のアイテムの説明です。' },
        { id: 7, title: 'アイテム 7', description: 'これは7番目のアイテムの説明です。' },
        { id: 8, title: 'アイテム 8', description: 'これは8番目のアイテムの説明です。' },
        { id: 9, title: 'アイテム 9', description: 'これは9番目のアイテムの説明です。' },
        { id: 10, title: 'アイテム 10', description: 'これは10番目のアイテムの説明です。' },
        { id: 11, title: 'アイテム 11', description: 'これは11番目のアイテムの説明です。' },
        { id: 12, title: 'アイテム 12', description: 'これは12番目のアイテムの説明です。' },
        { id: 13, title: 'アイテム 13', description: 'これは13番目のアイテムの説明です。' },
        { id: 14, title: 'アイテム 14', description: 'これは14番目のアイテムの説明です。' },
        { id: 15, title: 'アイテム 15', description: 'これは15番目のアイテムの説明です。' },
        { id: 16, title: 'アイテム 16', description: 'これは16番目のアイテムの説明です。' },
        { id: 17, title: 'アイテム 17', description: 'これは17番目のアイテムの説明です。' },
        { id: 18, title: 'アイテム 18', description: 'これは18番目のアイテムの説明です。' },
        { id: 19, title: 'アイテム 19', description: 'これは19番目のアイテムの説明です。' },
        { id: 20, title: 'アイテム 20', description: 'これは20番目のアイテムの説明です。' },
    ];

    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
                アイテムリスト
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {items.map((item) => (
                    <Paper
                        key={item.id}
                        elevation={2}
                        sx={{
                            p: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            minHeight: '100px',
                            '&:hover': {
                                boxShadow: 4,
                                transform: 'translateY(-2px)',
                                transition: 'all 0.2s ease-in-out',
                            },
                        }}
                    >
                        <Typography variant="h6" component="h2" gutterBottom>
                            {item.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            {item.description}
                        </Typography>
                    </Paper>
                ))}
            </Box>
            <Fab
                color="primary"
                aria-label="add"
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                    '&:hover': {
                        transform: 'scale(1.1)',
                        transition: 'transform 0.2s ease-in-out',
                    },
                }}
            >
                <AddIcon />
            </Fab>
        </Container>
    );
}

export default Home;
