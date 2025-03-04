import React from "react";
import { useToast } from "@chakra-ui/react";
import { FaRegCircleCheck } from "react-icons/fa6";

interface CustomToastProps {
  heading: string;
  text: string;
  iconColor?: string;
}

const CustomToast = ({
  heading,
  text,
  iconColor = "#74C898",
}: CustomToastProps) => {
  return (
    <div
      style={{
        position: "relative",
        padding: "14px 18px",
        borderRadius: "15px",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(to right, #4f625e, #45464e)",
        color: "white",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "15px",
          padding: "2px",
          background: "linear-gradient(to right, #568b6f, #30393a)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          maskComposite: "exclude",
          zIndex: -1,
        }}
      ></div>
      <span
        style={{ marginRight: "14px", display: "flex", alignItems: "center" }}
      >
        <FaRegCircleCheck size={24} color={`${iconColor}`} />
      </span>
      <div>
        <div style={{ fontWeight: "bold", fontSize: "16px" }}>{heading}</div>
        <div style={{ fontSize: "14px", color: "#e0e0e0" }}>{text}</div>
      </div>
    </div>
  );
};
export const useCustomToast = () => {
  const toast = useToast();
  return (props: CustomToastProps) => {
    toast({
      position: "bottom-left",
      duration: 3000,
      render: () => <CustomToast {...props} />,
    });
  };
};
