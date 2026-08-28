# 🌋 VolcBox Next — 全能出海与设计提效 Figma 插件

<div align="center">

![Version](https://img.shields.io/badge/version-v1.0.0-blue.svg?style=flat-square)
![Figma](https://img.shields.io/badge/Figma-Plugin_API_v1-F24E1E?style=flat-square&logo=figma&logoColor=white)
![Platform](https://img.shields.io/badge/Platform-macOS%20%7C%20Windows%20%7C%20Web-success.svg?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat-square)

**专为出海设计师与产品研发团队打造的下一代全能 Figma 提效工具箱**  
*智能多语言翻译 · 真实数据模拟填充 · TinyPNG 多账号池极速压缩 · 色彩调校 · 云端配置跨端同步*

[功能特性](#-核心功能特性) • [快速安装](#-快速开始与安装) • [使用指南](#-功能使用指南) • [架构设计](#-技术架构) • [开源协议](#-开源协议)

</div>

---

## ✨ 核心功能特性

### 1. 🌐 智能多语言翻译 (AI & Fast Global Translation)
- **免配置极速翻译**：内置全球 100+ 语言毫秒级加速通道，即开即用；
- **自定义大模型接入**：支持 **DeepSeek**（推荐）、**OpenAI (ChatGPT / GPT-4o)**、**Kimi (月之暗面)**、**智谱 GLM**、**SiliconFlow** 及自定义兼容 API；
- **富文本样式无损还原**：翻译后完美保留段落内的局部加粗、不同字号、颜色、行高及下划线样式；
- **空间感知与批量画板生成**：自动识别画布画板，支持向右/向下矩阵式排版复制与自定义间距；
- **常用出海方案预设**：出海常用（英/日/韩）、欧美常用（英/法/德/西）一键批量并发翻译。

### 2. 📝 智能数据模拟与批量填充 (Smart Mock & Bulk Fill)
- **开箱即用丰富预设**：内置中英文姓名、常用城市、价格金额、电商数字等常见数据结构；
- **自定义词库与文本池**：支持直接粘贴自定义多行文本，一键批量填充画布中全部选中文本；
- **灵活填充规则**：支持按图层排列「顺序填充」或「随机填充」，支持自动添加前缀与后缀。

### 3. 🖼️ TinyPNG 多账号池极速压缩导出 (Smart Image Compressor)
- **多 Key 账号池轮询**：支持同时绑定多个 TinyPNG API Key，自动轮询负载均衡，突破单 Key 每月 500 张限制；
- **6 线程并发导出**：大幅提升多画板批量切图导出与压缩速度；
- **内嵌式胶囊进度展示**：无突兀弹窗与页面拉伸，按钮内实时展现 `已处理/总数`（如 `3/10 · 1.4s`）与平滑流光动效；
- **实时额度同步**：支持随时一键 🔄 刷新官方最新剩余额度，每次压缩完成后自动静默同步。

### 4. 🎨 智能色彩调节与样式库 (Color & Palette Lab)
- **精准 HSL 调色**：无需逐个图层微调，一键对所选画板全局微调色相 (Hue)、饱和度 (Saturation) 与明度 (Lightness)；
- **本地样式快速归档**：从画布一键提取色彩方案并保存为本地常用调色板。

### 5. 🛠️ 辅助提效小工具 (Productivity Tools)
- **画布拼图直出**：一键将所选画板排列并拼接为高清大图；
- **行高批量规范化**：一键将所选文本固定行高批量转换为 Auto，或反向固定像素行高；
- **透明边缘裁切**：智能检测并去除 PNG 图片四周冗余透明留白。

### 6. ☁️ 账号与多端配置云端自动同步 (Cloud Sync & License Key)
- **免注册极简密钥绑定**：一键生成专属同步密钥（`VB-xxxx-xxxx`），更换电脑或重装 Figma 粘贴密钥即可秒级拉取所有配置；
- **全量核心资产覆盖**：自动同步大模型 Key、TinyPNG 池、常用置顶语言、自定义词库与偏好预设；
- **静默增量同步**：修改任意配置后，后台自动在 1.2 秒内静默备份至云端。

---

## 🚀 快速开始与安装

### 在 Figma 中以开发模式加载

1. **克隆或下载本仓库**到本地电脑：
   ```bash
   git clone https://github.com/你的用户名/VolcBox.git
   ```
2. 打开 **Figma 客户端**（或网页版 Figma）；
3. 进入任意设计文件，点击菜单栏：
   `Plugins (插件)` ➔ `Development (开发)` ➔ `Import plugin from manifest... (从清单导入插件...)`；
4. 选择本项目文件夹中的 **`manifest.json`** 文件；
5. 点击运行 **VolcBox Next**，即可开始畅享高效设计！

---

## 🛠️ 技术架构

```text
VolcBox/
├── manifest.json       # Figma 插件清单配置 (Manifest V2 API)
├── code.js             # 插件核心主进程 (Sandbox Thread: 画布节点遍历、富文本样式提取、空间矩阵排布)
├── ui.html             # 现代化交互界面 (UI Webview Thread: 工业风界面、并发网络请求、多端云同步)
└── README.md           # 项目说明文档
```

- **高性能零依赖**：主进程采用纯原生 Figma Plugin API 与轻量化设计，秒开无卡顿；
- **多线程隔离**：DOM 渲染与画布操作分离，保障大文件设计画板批量操作时的流畅度。

---

## 📄 开源协议

本项目采用 [MIT License](LICENSE) 开源协议。欢迎提交 PR、Issue 或建议，共同打造更强大的设计生产力工具！
