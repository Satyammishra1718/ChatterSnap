import {
  Button,
  Dialog,
  DialogTitle,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {sampleUsers} from "../../../constants/data.constants"
import { useInputValidation } from "6pp";
import UserItem from "../UserItem/UserItem";
import toast from "react-hot-toast";

const NewGroup = () => {

  const groupName = useInputValidation("");

  const [members , setMembers] = useState(sampleUsers)
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

  

  const selectMemberHandler = (id : any) => {
    setSelectedMembers((prev : any) =>
      prev.includes(id)
        ? prev.filter((currElement : any) => currElement !== id)
        : [...prev, id]
    );

  };

  console.log(selectedMembers)

  const submitHandler = () => {};

  const closeHandler = () => {  };

  return (
    <Dialog onClose={closeHandler} open>
      <Stack p={{ xs: "1rem", sm: "3rem" }} width={"25rem"} spacing={"2rem"}>
        <DialogTitle textAlign={"center"} variant="h4">
          New Group
        </DialogTitle>

        <TextField
          label="Group Name"
          value={groupName.value}
          onChange={groupName.changeHandler}
        />

        <Typography variant="body1">Members</Typography>

        <Stack>
          {
            members.map((i) => (
              <UserItem
                user={i}
                key={i._id}
                handler={selectMemberHandler}
                isAdded={selectedMembers?.includes(i._id)}
              />
            ))
          }
        </Stack>

        <Stack direction={"row"} justifyContent={"space-evenly"}>
          <Button
            variant="outlined"
            color="error"
            size="large"
            onClick={closeHandler}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={submitHandler}
          >
            Create
          </Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default NewGroup;