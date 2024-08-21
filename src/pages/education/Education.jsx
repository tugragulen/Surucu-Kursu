import React from 'react';
import LicenseCard from "./LicenseCard";
import {Grid} from "@mui/material";
import {LicenseTypes} from "../../data/data";

const Education = () => {

    return (
        <Grid container spacing={2} marginTop={"1%"}>
            {LicenseTypes.map((licenseType) => (
                <Grid item xs={6} key={licenseType.title}>
                    <LicenseCard licenseType={licenseType}/>
                </Grid>
            ))}
        </Grid>);
}
export default Education;