import {ReactNode} from "react";
import {Box, Container} from "@mui/material";
import {styled} from "@mui/material/styles";

interface DefaultLayoutProps {
    children: ReactNode;
}

const StyledContainer = styled(Container)(({ theme }) => ({
    '&.MuiContainer-root': {
        padding: 0,
        margin: 0,
        maxWidth: 'none !important'
    },
}));

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <Box sx={{
            minHeight: '100vh',
            bgcolor: 'background.default',
        }}>
            <StyledContainer>
                {children}
            </StyledContainer>
        </Box>
    );
};

export default DefaultLayout;