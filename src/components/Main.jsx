import Grid from "@mui/material/Unstable_Grid2";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Cart from "./Cart";
import fajr from "../assets/images/fajr-prayer.png";
import dhohr from "../assets/images/dhhr-prayer-mosque.png";
import asr from "../assets/images/asr-prayer-mosque.png";
import moghrb from "../assets/images/sunset-prayer-mosque.png";
import isha from "../assets/images/night-prayer-mosque.png";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
function Main() {
  const [timings, settimings] = useState({
    Fajr: "03:09",
    Dhuhr: "12:21",
    Asr: "16:13",
    Sunset: "19:42",
    Isha: "21:34",
  });
  const [remainingtime, setremainingtime] = useState("");
  const gettiming = async () => {
    const data = await axios.get(
      `https://api.aladhan.com/v1/timingsByCity?country=TN &city=${selectedcity}`
    );
    settimings(data.data.data.timings);
  };
  const [selectedcity, setselectedcity] = useState("Zaghouan");
  const city = ["Tunis", "Zaghouan ", "Kairouan", "Sfax", "Sousse"];
  const [time, settimer] = useState();

  useEffect(() => {
    gettiming();
  }, [selectedcity]);
  useEffect(() => {
    const t = moment();
    settoday(t.format("MMMM d  YYYY | h:mm"));
    let interval = setInterval(() => {
      setupcountdowntime();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timings]);
  const salawat = ["Fajr", "Dhuhr", "Asr", "Sunset", "Isha"];
  const [nextprayerindex, setnextprayerindex] = useState(0);
  const setupcountdowntime = () => {
    const momentnow = moment();
    let nextPrayer = 0;
    if (
      momentnow.isAfter(moment(timings.Fajr, "hh:mm")) &&
      momentnow.isBefore(moment(timings.Dhuhr, "hh:mm"))
    ) {
      nextPrayer = 1;
    } else if (
      momentnow.isAfter(moment(timings.Dhuhr, "hh:mm")) &&
      momentnow.isBefore(moment(timings.Asr, "hh:mm"))
    ) {
      nextPrayer = 2;
    } else if (
      momentnow.isAfter(moment(timings.Asr, "hh:mm")) &&
      momentnow.isBefore(moment(timings.Sunset, "hh:mm"))
    ) {
      nextPrayer = 3;
    } else if (
      momentnow.isAfter(moment(timings.Sunset, "hh:mm")) &&
      momentnow.isBefore(moment(timings.Isha, "hh:mm"))
    ) {
      nextPrayer = 4;
    } else {
      nextPrayer = 0;
    }
    setnextprayerindex(nextPrayer);
    const nextprayername = salawat[nextprayerindex];
    const nextprayertime = timings[nextprayername];

    const nextprayertimemoment = moment(nextprayertime, "hh:mm");
    let remainingtime = moment(nextprayertime, "hh:mm").diff(momentnow);

    if (remainingtime < 0) {
      const midnightdiff = moment("11:59:59", "hh:mm:ss").diff(momentnow);
      const fajrtomidnight = nextprayertimemoment.diff("00:00", "hh:mm");
      const totaltime = midnightdiff + fajrtomidnight;
      remainingtime = totaltime;
    }
    const durationtime = moment.duration(remainingtime);

    setremainingtime(
      `${durationtime.hours()}:${durationtime.minutes()}:${durationtime.seconds()}`
    );
  };

  const [today, settoday] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setselectedcity(event.target.value);
  };

  return (
    <div>
      <Grid
        className="text-center mt-8"
        container
        style={{ marginBottom: "30px" }}
      >
        <Grid xs={6}>
          <div>
            <h2 className="text-4xl">{today}</h2>
            <h1 className="text-3xl">{selectedcity}</h1>
          </div>
        </Grid>
        <Grid xs={6}>
          <div>
            <h2 className="text-2xl text-zinc-950">
              Until prayer of {salawat[nextprayerindex]} remains
            </h2>
            <h1 className="text-3xl">{remainingtime}</h1>
          </div>
        </Grid>
      </Grid>
      <Divider />
      <Stack
        direction="row"
        justifyContent="space-around"
        style={{ marginTop: "40Px" }}
      >
        <Cart name="Fajr" time={timings.Fajr} image={fajr} />
        <Cart name="Dhohr" time={timings.Dhuhr} image={dhohr} />
        <Cart name="Assr" time={timings.Asr} image={asr} />
        <Cart name="Maghreb" time={timings.Sunset} image={moghrb} />
        <Cart name="Isha" time={timings.Isha} image={isha} />
      </Stack>
      <Stack direction="row" className=" justify-center mt-8">
        <FormControl className="w-1/5  bg-white">
          <InputLabel id="demo-simple-select-label">City</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            onChange={handleChange}
          >
            {city.map((ville) => (
              <MenuItem key={ville} value={ville}>
                {ville}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>
    </div>
  );
}

export default Main;
