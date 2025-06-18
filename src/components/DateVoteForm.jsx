import {
    Box,
    Button,
    Container,
    Paper,
    Stack,
    Typography
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import ja from 'date-fns/locale/ja';
import React, { useState } from 'react';

const DateVoteForm = () => {
    const [dates, setDates] = useState([null, null, null]);

    const handleDateChange = (index, newDate) => {
        const newDates = [...dates];
        newDates[index] = newDate;
        setDates(newDates);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('投票された日付:', dates);
        // ここでAPIリクエストなどを送信できます
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Typography variant="h4" component="h1" gutterBottom align="center">
                    日付投票フォーム
                </Typography>
                <Typography variant="body1" gutterBottom align="center" sx={{ mb: 3 }}>
                    希望する日付を3つ選択してください
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
                        <Stack spacing={3}>
                            {dates.map((date, index) => (
                                <DatePicker
                                    key={index}
                                    label={`候補 ${index + 1}`}
                                    value={date}
                                    onChange={(newDate) => handleDateChange(index, newDate)}
                                    slotProps={{
                                        textField: {
                                            fullWidth: true,
                                            required: true,
                                        },
                                    }}
                                />
                            ))}
                        </Stack>
                    </LocalizationProvider>
                    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            disabled={dates.some((date) => !date)}
                        >
                            投票する
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default DateVoteForm; 