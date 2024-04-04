"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { useAppContext } from "@/context";
import DialogContent from "@mui/material/DialogContent";

import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog() {
  const { shirt, isLoadingShirt, isOpen, handleClose } = useAppContext();

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => handleClose()}
        TransitionComponent={Transition}
      >
        {isLoadingShirt && (
          <div className="w-full items-center">
            <CircularProgress color="secondary" />
          </div>
        )}
        {shirt && (
          <>
            <Toolbar className="bg-primary">
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                {shirt.title}
              </Typography>
            </Toolbar>
            <DialogContent>
              <div className="flex gap-4">
                <div>
                  <Image
                    src={shirt.img}
                    alt={shirt.title}
                    width={200}
                    height={200}
                  />
                </div>
                <div>
                  <h2 className="text-primary font-medium uppercase">
                    {shirt.title}
                  </h2>
                  <p className="text-gray-500 max-w-[150px]">{shirt.desc}</p>
                  <div className="font-bold flex gap-4">
                    ${shirt.price}
                    <del className="text-gray-500 font-normal">
                      ${parseInt(shirt.price) + 50}.00
                    </del>
                  </div>
                  <p className="text-gray-500 w-full">
                    Tamanhos:{" "}
                    {shirt.sizes?.map((s, index) => (
                      <b key={index} className="w-[20px] h-[20px]">
                        {s}
                        {shirt.sizes.length - 1 === index ? "" : ", "}
                      </b>
                    ))}
                  </p>
                  <p className="text-gray-500 w-full">
                    Cores:{" "}
                    {shirt.colors?.map((s, index) => (
                      <b key={index} className="w-[20px] h-[20px]">
                        {s}
                        {shirt.colors.length - 1 === index ? "" : ", "}
                      </b>
                    ))}
                  </p>
                </div>
              </div>
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  );
}
