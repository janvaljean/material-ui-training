import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const LessonButton = () => {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button size="large" color="primary" variant="text">
          Primary
        </Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button size="small" color="secondary" variant="contained">
          Secondary
        </Button>
        <Button color="error" variant="outlined">
          Error
        </Button>
      </Stack>
      <Stack display="block" spacing={4}>
        <Button color="info" disabled>
          Button1
        </Button>
        <Button color="success" variant="contained">
          Button2
        </Button>
        <Button color="warning" variant="outlined">
          warning
        </Button>
        <Button variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
      <Stack direction="row" spacing={2}>
      </Stack>
    </div>
  );
};

export default LessonButton;
