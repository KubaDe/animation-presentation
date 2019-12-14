import P0 from './0'
import P1 from './1'
import P2 from './2'
import P3 from './3'
import P4 from './4'
import Pause from './Additional/Pause'


export default [P0, P1, P2, [Pause], P3, P4].flatMap(el => el)
