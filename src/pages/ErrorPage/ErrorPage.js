import { Typography } from "@material-ui/core";
import React from "react";
import { ErrorPageContainer } from "./styled";

const ErrorPage = () => {
    return (
        <ErrorPageContainer>
            <Typography color="black" variant="h4" align="center" > Error 404 - Page not found </Typography>
        </ErrorPageContainer>
    )
}

export default ErrorPage