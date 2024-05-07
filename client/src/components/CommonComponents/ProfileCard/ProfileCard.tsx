import React from "react"
import { ProfileCardProps } from "../../../constants/types.constants"
import { Stack, Typography } from "@mui/material"

const ProfileCard : React.FC<ProfileCardProps> = ({
    text ,
    heading
}) => {
  return (
    <Stack
    direction={"row"}
    alignItems={"center"}
    spacing={"1rem"}
    color={"white"}
    textAlign={"center"}
    >

    <Stack>
        <Typography variant="body1" >{text}</Typography>
        <Typography color={"gray"} variant="caption">
            {heading}
        </Typography>
    </Stack>
    </Stack>
  )
}

export default ProfileCard
