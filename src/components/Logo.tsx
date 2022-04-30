import { forwardRef, Box, ImageProps, Image } from "@chakra-ui/react";
import logo from "../../assets/shared/logo.svg";

export const Logo = forwardRef<ImageProps, "img">((props, ref) => <Image src={logo} ref={ref} {...props} />);
