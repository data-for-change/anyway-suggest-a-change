import React from "react";
import {
  IconButton,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  SvgIconTypeMap,
} from "@mui/material";
import { ErrorRounded, Chat } from "@mui/icons-material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

export interface StreetCardProps {
  city: string;
  streetName: string;
}

export interface CardIconProps {
  ariaLabel: string;
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
}

const CardIcon: React.FC<CardIconProps> = ({ ariaLabel, Icon }) => {
  return (
    <IconButton
      aria-label={ariaLabel}
      sx={(theme) => ({
        backgroundColor: theme.palette.secondary.main,
        "&:hover": {
          backgroundColor: theme.palette.secondary.light,
        },
      })}
    >
      <Icon sx={{ fontSize: "2rem" }} />
    </IconButton>
  );
};

const StreetCard: React.FC<StreetCardProps> = ({ streetName, city }) => {
  return (
    <Card
      sx={{
        height: "fit-content",
        width: 345,
        marginRight: "12px",
        marginBottom: "24px",
        position: "relative",
        borderRadius: "20px",
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        height="280"
        image="https://upload.wikimedia.org/wikipedia/commons/a/a9/Long_and_Loop_Street_map.svg"
      />
      <CardActions
        sx={{
          bottom: 50,
          position: "absolute",
          width: "90%",
          justifyContent: "flex-end",
        }}
      >
        <CardIcon Icon={ErrorRounded} ariaLabel="report" />
        <CardIcon Icon={Chat} ariaLabel="comments" />
      </CardActions>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
          {city}, {streetName}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StreetCard;
