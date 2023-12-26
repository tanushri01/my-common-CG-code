import dynamic from 'next/dynamic';

export const Button = dynamic(() => import('@mui/material/Button'));
export const Box = dynamic(() => import('@mui/material/Box'));
export const Container = dynamic(() => import('@mui/material/Container'));
export const Card = dynamic(() => import('@mui/material/Card'));
export const CardActionArea = dynamic(
  () => import('@mui/material/CardActionArea'),
);
export const CardActions = dynamic(() => import('@mui/material/CardActions'));
export const CardContent = dynamic(() => import('@mui/material/CardContent'));
export const Chip = dynamic(() => import('@mui/material/Chip'));
export const DialogTitle = dynamic(() => import('@mui/material/DialogTitle'));
export const FormGroup = dynamic(() => import('@mui/material/FormGroup'));
export const Grid = dynamic(() => import('@mui/material/Grid'));
export const InputAdornment = dynamic(
  () => import('@mui/material/InputAdornment'),
);
export const ListItem = dynamic(() => import('@mui/material/ListItem'));
export const List = dynamic(() => import('@mui/material/List'));
export const ListItemButton = dynamic(
  () => import('@mui/material/ListItemButton'),
);
export const ListItemText = dynamic(() => import('@mui/material/ListItemText'));
export const Menu = dynamic(() => import('@mui/material/Menu'));
export const MenuItem = dynamic(() => import('@mui/material/MenuItem'));
export const Typography = dynamic(() => import('@mui/material/Typography'));
export const Toolbar = dynamic(() => import('@mui/material/Toolbar'));

export const Step = dynamic(() => import('@mui/material/Step'));
export const StepLabel = dynamic(() => import('@mui/material/StepLabel'));
export const Stepper = dynamic(() => import('@mui/material/Stepper'));
