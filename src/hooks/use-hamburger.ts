import { hamburgerState } from "@/store/features/hamburger-slice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export function useHamburger() {
  const dispatch = useAppDispatch();
  const { isHamburgerOpened } = useAppSelector((state) => state.hamburgerState);

  const handleHamburgerClick = () => {
    dispatch(hamburgerState());
  };

  return { isHamburgerOpened, handleHamburgerClick };
}