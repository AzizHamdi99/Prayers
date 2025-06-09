import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cart({ name, time, image }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={image}
                title="green iguana"
            />
            <CardContent>
                <h1 className='text-2xl'> {name}</h1>


                <Typography variant="h1" color="text.secondary">
                    {time}

                </Typography>
            </CardContent>

        </Card>
    );
}
