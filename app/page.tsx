import {
    AppBar,
    Toolbar,
    Typography
} from "@mui/material";
export default function Page() {
    return (
        <>
            <AppBar position="sticky">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{
                        flexGrow: 1
                    }} style={{
                        textAlign: "center"
                    }}>
                        瑞磅交易系统
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}