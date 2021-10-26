import React from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";

const RatingCmp = ({ value, text }) => {
  return (
    <div className="rating">
      {value >= 1 ? (
        <StarIcon />
      ) : value >= 0.5 ? (
        <StarHalfIcon />
      ) : (
        <StarOutlineIcon />
      )}

      {value >= 2 ? (
        <StarIcon />
      ) : value >= 1.5 ? (
        <StarHalfIcon />
      ) : (
        <StarOutlineIcon />
      )}

      {value >= 3 ? (
        <StarIcon />
      ) : value >= 2.5 ? (
        <StarHalfIcon />
      ) : (
        <StarOutlineIcon />
      )}

      {value >= 4 ? (
        <StarIcon />
      ) : value >= 3.5 ? (
        <StarHalfIcon />
      ) : (
        <StarOutlineIcon />
      )}

      {value >= 5 ? (
        <StarIcon />
      ) : value >= 4.5 ? (
        <StarHalfIcon />
      ) : (
        <StarOutlineIcon />
      )}
      
      <span>{text && text}</span>
    </div>
  );
};

export default RatingCmp;