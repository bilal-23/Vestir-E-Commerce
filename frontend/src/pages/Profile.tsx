import styles from "./Cart.module.css";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import UserProfile from "../components/UserProfile/Profile";
import Addresses from "../components/Addresses/Addresses";

const Profile = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <main className={styles["main"]}>
      <header className={styles["heading"]}>
        <h1 className={`text-l text-300`}>Account</h1>
        <AccountBoxIcon sx={{ fontSize: 40 }} />
      </header>
      <Box
        sx={{ borderBottom: 1, borderColor: "var(--blue)", marginTop: "2rem" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ color: "var(--blue)", fontSize: "2rem" }}
        >
          <Tab
            label="Profile"
            {...a11yProps(0)}
            sx={{ fontSize: "1.8rem", color: "var(--blue)" }}
          />
          <Tab
            label="Address"
            {...a11yProps(1)}
            sx={{ fontSize: "1.8rem", color: "var(--blue)" }}
          />
          {/* <Tab label="Orders" {...a11yProps(2)} sx={{ fontSize: "1.8rem" }} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <UserProfile />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Addresses />
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </main>
  );
};

export default Profile;

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
