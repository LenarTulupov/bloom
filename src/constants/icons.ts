import { FC, SVGProps } from 'react';
import { RiFacebookCircleLine as FacebookIcon } from "react-icons/ri";
import { FiTwitter as TwitterIcon } from "react-icons/fi";
import { AiOutlineLinkedin as LinkedInIcon } from "react-icons/ai";
import { IoLocationOutline as LocationIcon } from "react-icons/io5";
import { LuPhone as PhoneIcon } from "react-icons/lu";
import { LuMailOpen as MailIcon} from "react-icons/lu";
import { MdOutlineDateRange as DateIcon} from "react-icons/md";
import { VscCommentDiscussion as CommentsIcon} from "react-icons/vsc";
import { FaArrowRight as ArrowIcon} from "react-icons/fa6";
import { IoIosAddCircleOutline as AddIcon } from "react-icons/io";
import { IoIosRemoveCircleOutline as RemoveIcon} from "react-icons/io";
import { AiOutlineYoutube as YoutubeIcon} from "react-icons/ai";
import { FaInstagram as InstagramIcon} from "react-icons/fa";
import { BiShow  as ShowIcon} from "react-icons/bi";
import { BiHide as HideIcon} from "react-icons/bi";
import { IoClose as CloseIcon} from "react-icons/io5";
import { FaAngleDown as DownIcon} from "react-icons/fa6";
import { FaAngleUp as UpIcon} from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight as DoubleArrowIcon} from "react-icons/md";


export const ICONS: Record<string, FC<SVGProps<SVGSVGElement>>> = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  linkedin: LinkedInIcon,
  youtube: YoutubeIcon,
  instagram: InstagramIcon,
  location: LocationIcon,
  phone: PhoneIcon,
  mail: MailIcon,
  date: DateIcon,
  comments: CommentsIcon,
  arrow: ArrowIcon,
  add: AddIcon,
  remove: RemoveIcon,
  show: ShowIcon,
  hide: HideIcon,
  close: CloseIcon,
  down: DownIcon,
  up: UpIcon,
  doubleArrow: DoubleArrowIcon
  
}