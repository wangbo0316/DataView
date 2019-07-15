import dva from 'dva';
import './index.css';
import Theme_1 from './options/theme/Theme_1'
import Theme_2 from './options/theme/Theme_2'
import Theme_3 from './options/theme/Theme_3'
import Theme_4 from './options/theme/Theme_4'
import Theme_5 from './options/theme/Theme_5'
import Theme_6 from './options/theme/Theme_6'
import Theme_7 from './options/theme/Theme_7'
import Theme_8 from './options/theme/Theme_8'
import chinaMap from './options/map/china'
import guizhouMap from './options/map/guizhou'
import guiyangMap from './options/map/guiyangmap'
import echarts from 'echarts'

echarts.registerTheme('1', Theme_1)
echarts.registerTheme('2', Theme_2)
echarts.registerTheme('3', Theme_3)
echarts.registerTheme('4', Theme_4)
echarts.registerTheme('5', Theme_5)
echarts.registerTheme('6', Theme_6)
echarts.registerTheme('7', Theme_7)
echarts.registerTheme('8', Theme_8)

echarts.registerMap('china',chinaMap)
echarts.registerMap('guizhou',guizhouMap)
echarts.registerMap('guiyang',guiyangMap)

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/dvaState'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
