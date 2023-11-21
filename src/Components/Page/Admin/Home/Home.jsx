import React from "react";
import FeatureInfo from "../FeatureInfo/FeatureInfo";
import Chart from "../Chart/Chart";
import WidgetSm from "../WidgetSm/WidgetSm";
import WidgetLg from "../WidgetLg/WidgetLg";
import { userData } from "../dummyData";
import LayoutAdmin from "../../../Common/LayoutAdmin";
import {Box} from "@mui/material";

export default function Home() {

  return (
    <LayoutAdmin>
      <FeatureInfo />
        <Chart
          data={userData}
          title="Phân tích người dùng"
          grid
          dataKey="Người dùng"
        />
        <Box display='flex' mt={3}>
          <WidgetSm />
          <WidgetLg />
        </Box>
    </LayoutAdmin>
  );
}
