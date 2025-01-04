import {ReactNode} from "react";
import {Box, Container} from "@mui/material";
import {styled} from "@mui/material/styles";

interface DefaultLayoutProps {
    children: ReactNode;
}

const StyledContainer = styled(Container)(({ theme }) => ({
    '& .MuiTypography-root': {  // 모든 Typography에 적용
        color: theme.palette.text.primary,
        p: 0
    }
}));

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <Box sx={{
            minHeight: '100vh',
            bgcolor: 'background.default',
            p: 0
        }}>
            <StyledContainer
                // maxWidth="sm"
                // sx={{
                //     bgcolor: 'background.paper',
                //     minHeight: '100vh',
                // }}
            >
                {children}
            </StyledContainer>
        </Box>
    );
};

export default DefaultLayout;