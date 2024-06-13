import type {ThemeConfig} from "antd";

const theme: ThemeConfig = {
    token: {
        fontSize: 13,
    },
    components: {
        Layout: {
          siderBg: '#f28322'
        },
        Menu: {
            itemActiveBg: '#002140',
            itemBg: '#f28322',
            itemColor: '#ffffff',
            itemHoverBg: '#002140',
            itemHoverColor: '#ffffff'
        },
    }
}
export default theme