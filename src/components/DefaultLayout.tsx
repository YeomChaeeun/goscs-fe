import {ReactNode} from "react";

interface DefaultLayoutProps {
    children: ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
    return (
        <div className="layout-wrapper">
            <div className="layout-container">
                {children}
            </div>
        </div>
    );
};

export default DefaultLayout;