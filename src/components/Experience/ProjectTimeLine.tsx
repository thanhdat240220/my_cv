import React from "react";
import { ExpandMore, Update, Work } from "@material-ui/icons";
import {
  TimelineItem,
  Timeline,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@material-ui/lab";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
} from "@material-ui/core";

export interface ITimeLine {
  time: string;
  title: string;
  desc?: string;
  icon?: React.ReactElement;
}

function TimeLine() {
  const dataLineTime: Array<ITimeLine> = [
    {
      time: "2018",
      title: "Learn develop",
      desc: "asdfasdfasdfasdf",
      icon: <Work />,
    },
    {
      time: "2019",
      title: "First my job",
    },
    {
      time: "2020",
      title: "Breakout",
    },
    {
      time: "2021",
      title: "Grow",
      icon: <Update />,
    },
  ];
  const renderLineTime = () => {
    return dataLineTime.map((lineTime, index) => {
      return (
        <TimelineItem className="line-time__item" key={index}>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              {lineTime.time}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              color={
                index === 0
                  ? undefined
                  : index === dataLineTime.length - 1
                  ? "secondary"
                  : "primary"
              }
            >
              {lineTime.icon}
            </TimelineDot>
            {index !== dataLineTime.length - 1 && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3}>
              <Accordion className="line-time__item__accordion">
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls={`panel-content-${index}`}
                  id={`panel-content-${index}`}
                  className="item__accordion-title"
                >
                  {lineTime.title}
                </AccordionSummary>
                <AccordionDetails className="item__accordion-desc">
                  {/* <div
                    dangerouslySetInnerHTML={{
                      __html: lineTime?.desc || "",
                    }}
                  ></div> */}
                </AccordionDetails>
              </Accordion>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      );
    });
  };
  return (
    <>
      <Timeline align="alternate" className="line-time__list">
        {renderLineTime()}
      </Timeline>
    </>
  );
}

export default TimeLine;
