import { Item, Wrapper } from "./styled"
import { Dollar } from "./icons/Dollar";
import { Fire } from "./icons/Fire";
import { HandsGood } from "./icons/HandsGood";
import { Safe } from "./icons/Safe";

export const AnimateBackground = () => {
  const row = ['', '', '', '', '', '']
  const icons = [Dollar, Fire, HandsGood, Safe]
  const colors = { fill: ['#ee2929', '#1b15c4', '#00e1ce', '#c415b3'] }
  const duration = { duration: 2, repeat: Infinity }

  /* ==> For implementation next refactoring <==
     const changeOrder = (array: string[]) => {
    let result: string[] = [];
    for (let index = 0; index < array.length; index++) {
      const randomIndex = Math.floor((Math.random() / 2) * 10);
      const element = array[index];
      result.splice(randomIndex, 0, element);
    }
    return result;
  }; */

  const changeOrder = <T,>(array: T[]): T[] => {
    return array.sort(() => Math.random() - 0.5)
  }

  return (
    <Wrapper>
      {
        row.map(() =>
          icons.map((Icon, i) =>
            <Item
              key={i}
              // animate={{ y: [-400, -300, -200, -100, 0, 100, 200] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {<Icon
                colors={colors}
                duration={{ delay: Math.random() + 1 * i, duration: duration.duration, repeat: duration.repeat }}
              />}
            </Item>
          )
        )
      }
    </Wrapper >
  )
}
