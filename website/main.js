// =====================================================================
// VolcBox Next Official Website - Interactive Scripts
// =====================================================================

const MockupViews = {
  translate: `
    <div style="display: flex; flex-direction: column; gap: 16px; height: 100%; justify-content: space-between;">
      <div>
        <div style="font-size: 0.8rem; font-weight: 700; color: #888; text-transform: uppercase; margin-bottom: 8px;">目标出海语言 (支持 100+ 语言)</div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <span style="background: rgba(255, 85, 0, 0.15); border: 1px solid rgba(255, 85, 0, 0.4); color: #FFAA55; padding: 5px 12px; border-radius: 6px; font-size: 0.85rem; font-weight: 600;">🇺🇸 英语 (English)</span>
          <span style="background: #1C1E26; border: 1px solid #2C2F3C; color: #BBB; padding: 5px 12px; border-radius: 6px; font-size: 0.85rem;">🇯🇵 日语 (日本語)</span>
          <span style="background: #1C1E26; border: 1px solid #2C2F3C; color: #BBB; padding: 5px 12px; border-radius: 6px; font-size: 0.85rem;">🇰🇷 韩语 (한국어)</span>
          <span style="background: #1C1E26; border: 1px solid #2C2F3C; color: #BBB; padding: 5px 12px; border-radius: 6px; font-size: 0.85rem;">🇪🇸 西班牙语</span>
          <span style="background: #1C1E26; border: 1px solid #2C2F3C; color: #BBB; padding: 5px 12px; border-radius: 6px; font-size: 0.85rem;">🇫🇷 法语</span>
        </div>
      </div>

      <div style="background: #0E1015; border: 1px solid #222530; border-radius: 10px; padding: 16px;">
        <div style="font-size: 0.75rem; color: #666; font-weight: 600; margin-bottom: 6px;">✨ 富文本无损保留实时预览</div>
        <div style="font-size: 0.95rem; line-height: 1.6;">
          <span style="color: #FFAA55; font-weight: 700;">Summer Flash Sale:</span> Enjoy up to <span style="color: #FF5500; font-weight: 800; font-size: 1.15em;">70% OFF</span> on all new design components!
        </div>
      </div>

      <div style="display: flex; gap: 12px; align-items: center; justify-content: space-between; border-top: 1px solid #1F222D; padding-top: 14px;">
        <div style="font-size: 0.82rem; color: #777;">已连接: <strong style="color: #00D26A;">DeepSeek V3 (高速)</strong></div>
        <button style="background: linear-gradient(135deg, #FF6600, #FF4400); color: #fff; border: none; padding: 9px 20px; border-radius: 8px; font-weight: 600; font-size: 0.9rem; cursor: pointer; box-shadow: 0 4px 15px rgba(255, 85, 0, 0.35);">
          🚀 一键批量翻译画板
        </button>
      </div>
    </div>
  `,

  fill: `
    <div style="display: flex; flex-direction: column; gap: 16px; height: 100%; justify-content: space-between;">
      <div>
        <div style="font-size: 0.8rem; font-weight: 700; color: #888; text-transform: uppercase; margin-bottom: 8px;">出海高频真实数据集</div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <span style="background: rgba(255, 85, 0, 0.15); border: 1px solid rgba(255, 85, 0, 0.4); color: #FFAA55; padding: 5px 12px; border-radius: 6px; font-size: 0.85rem; font-weight: 600;">👤 欧美真实姓名</span>
          <span style="background: #1C1E26; border: 1px solid #2C2F3C; color: #BBB; padding: 5px 12px; border-radius: 6px; font-size: 0.85rem;">🏙️ 全球主要城市</span>
          <span style="background: #1C1E26; border: 1px solid #2C2F3C; color: #BBB; padding: 5px 12px; border-radius: 6px; font-size: 0.85rem;">💵 电商多币种价格</span>
          <span style="background: #1C1E26; border: 1px solid #2C2F3C; color: #BBB; padding: 5px 12px; border-radius: 6px; font-size: 0.85rem;">✉️ 用户企业邮箱</span>
        </div>
      </div>

      <div style="background: #0E1015; border: 1px solid #222530; border-radius: 10px; padding: 14px;">
        <div style="font-size: 0.75rem; color: #666; font-weight: 600; margin-bottom: 8px;">自定义词库批量导入</div>
        <textarea readonly style="width: 100%; height: 75px; background: transparent; border: none; color: #CCC; font-family: var(--font-mono); font-size: 0.82rem; resize: none; outline: none; line-height: 1.5;">Emily Watson, Chief Design Officer
Liam Vance, Senior Product Lead
Sophia Reynolds, Growth Specialist</textarea>
      </div>

      <div style="display: flex; gap: 12px; align-items: center; justify-content: space-between; border-top: 1px solid #1F222D; padding-top: 14px;">
        <div style="font-size: 0.82rem; color: #777;">模式: <strong>顺序排列填充</strong></div>
        <button style="background: linear-gradient(135deg, #FF6600, #FF4400); color: #fff; border: none; padding: 9px 20px; border-radius: 8px; font-weight: 600; font-size: 0.9rem; cursor: pointer; box-shadow: 0 4px 15px rgba(255, 85, 0, 0.35);">
          ✨ 智能替换选中文本
        </button>
      </div>
    </div>
  `,

  compress: `
    <div style="display: flex; flex-direction: column; gap: 16px; height: 100%; justify-content: space-between;">
      <div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <div style="font-size: 0.8rem; font-weight: 700; color: #888; text-transform: uppercase;">TinyPNG 账号池负载均衡</div>
          <span style="font-size: 0.75rem; color: #00D26A; font-weight: 600;">🟢 2 个 Key 在线 (剩余 740/1000 次)</span>
        </div>
        <div style="display: flex; flex-direction: column; gap: 6px;">
          <div style="background: #171A23; border: 1px solid #272B3A; padding: 8px 12px; border-radius: 6px; display: flex; justify-content: space-between; font-size: 0.8rem;">
            <span style="font-family: var(--font-mono); color: #DDD;">Key #1: 5c98****3f1a</span>
            <span style="color: #FFAA55;">剩余 380 / 500 次</span>
          </div>
          <div style="background: #171A23; border: 1px solid #272B3A; padding: 8px 12px; border-radius: 6px; display: flex; justify-content: space-between; font-size: 0.8rem;">
            <span style="font-family: var(--font-mono); color: #DDD;">Key #2: 9b21****88e4</span>
            <span style="color: #FFAA55;">剩余 360 / 500 次</span>
          </div>
        </div>
      </div>

      <div style="background: #0E1015; border: 1px solid #222530; border-radius: 10px; padding: 14px;">
        <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 8px;">
          <span style="color: #999;">导出倍率: <strong style="color: #FFF;">@2x (Retina)</strong></span>
          <span style="color: #999;">格式: <strong style="color: #FFF;">PNG (无损)</strong></span>
        </div>
        <div style="background: #151822; padding: 10px; border-radius: 6px; font-size: 0.8rem; color: #00D26A; display: flex; align-items: center; gap: 6px;">
          <span>⚡️ 6 线程并发加速引擎已就绪</span>
        </div>
      </div>

      <div style="display: flex; gap: 12px; align-items: center; justify-content: space-between; border-top: 1px solid #1F222D; padding-top: 14px;">
        <div style="font-size: 0.82rem; color: #777;">平均压缩率: <strong style="color: #00D26A;">-78.4%</strong></div>
        <button style="background: linear-gradient(135deg, #FF6600, #FF4400); color: #fff; border: none; padding: 9px 20px; border-radius: 8px; font-weight: 600; font-size: 0.9rem; cursor: pointer; box-shadow: 0 4px 15px rgba(255, 85, 0, 0.35); display: flex; align-items: center; gap: 6px;">
          <span style="display: inline-block; width: 8px; height: 8px; background: #FFF; border-radius: 50%; animation: pulse-ring 1.5s infinite;"></span>
          <span>极速压缩并导出: 3/10 · 1.4s</span>
        </button>
      </div>
    </div>
  `,

  color: `
    <div style="display: flex; flex-direction: column; gap: 16px; height: 100%; justify-content: space-between;">
      <div>
        <div style="font-size: 0.8rem; font-weight: 700; color: #888; text-transform: uppercase; margin-bottom: 12px;">画板全局 HSL 精准微调</div>
        
        <div style="display: flex; flex-direction: column; gap: 10px;">
          <div>
            <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: #AAA; margin-bottom: 4px;">
              <span>色相 (Hue)</span>
              <span style="color: #FFAA55; font-family: var(--font-mono);">+15°</span>
            </div>
            <input type="range" min="-180" max="180" value="15" style="width: 100%; accent-color: #FF5500;">
          </div>
          <div>
            <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: #AAA; margin-bottom: 4px;">
              <span>饱和度 (Saturation)</span>
              <span style="color: #FFAA55; font-family: var(--font-mono);">110%</span>
            </div>
            <input type="range" min="0" max="200" value="110" style="width: 100%; accent-color: #FF5500;">
          </div>
        </div>
      </div>

      <div style="background: #0E1015; border: 1px solid #222530; border-radius: 10px; padding: 14px;">
        <div style="font-size: 0.75rem; color: #666; font-weight: 600; margin-bottom: 8px;">🎨 本地常用调色板快速提取</div>
        <div style="display: flex; gap: 8px;">
          <div style="width: 32px; height: 32px; border-radius: 6px; background: #FF5500; border: 1px solid rgba(255,255,255,0.2);"></div>
          <div style="width: 32px; height: 32px; border-radius: 6px; background: #FFAA55; border: 1px solid rgba(255,255,255,0.2);"></div>
          <div style="width: 32px; height: 32px; border-radius: 6px; background: #1C1E26; border: 1px solid rgba(255,255,255,0.2);"></div>
          <div style="width: 32px; height: 32px; border-radius: 6px; background: #00D26A; border: 1px solid rgba(255,255,255,0.2);"></div>
        </div>
      </div>

      <div style="display: flex; gap: 12px; align-items: center; justify-content: flex-end; border-top: 1px solid #1F222D; padding-top: 14px;">
        <button style="background: linear-gradient(135deg, #FF6600, #FF4400); color: #fff; border: none; padding: 9px 20px; border-radius: 8px; font-weight: 600; font-size: 0.9rem; cursor: pointer; box-shadow: 0 4px 15px rgba(255, 85, 0, 0.35);">
          应用调色到所选画板
        </button>
      </div>
    </div>
  `,

  tools: `
    <div style="display: flex; flex-direction: column; gap: 14px; height: 100%;">
      <div style="font-size: 0.8rem; font-weight: 700; color: #888; text-transform: uppercase;">设计师常用快捷小工具</div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
        <div style="background: #161922; border: 1px solid #262A38; border-radius: 8px; padding: 14px; cursor: pointer;">
          <div style="font-size: 1.1rem; margin-bottom: 4px;">📸 画布拼图直出</div>
          <div style="font-size: 0.78rem; color: #888;">一键将多画板按序拼成带标题的高清大图</div>
        </div>

        <div style="background: #161922; border: 1px solid #262A38; border-radius: 8px; padding: 14px; cursor: pointer;">
          <div style="font-size: 1.1rem; margin-bottom: 4px;">📏 文本行高批量规范</div>
          <div style="font-size: 0.78rem; color: #888;">批量将固定行高转为 Auto，或反向固定</div>
        </div>

        <div style="background: #161922; border: 1px solid #262A38; border-radius: 8px; padding: 14px; cursor: pointer;">
          <div style="font-size: 1.1rem; margin-bottom: 4px;">✂️ PNG 透明留白裁切</div>
          <div style="font-size: 0.78rem; color: #888;">智能识别并裁切图片四周无用透明区域</div>
        </div>

        <div style="background: #161922; border: 1px solid #262A38; border-radius: 8px; padding: 14px; cursor: pointer;">
          <div style="font-size: 1.1rem; margin-bottom: 4px;">📋 微信切图一键直拷</div>
          <div style="font-size: 0.78rem; color: #888;">剪贴板直写多图，聊天窗口直接 ⌘+V</div>
        </div>
      </div>
    </div>
  `,

  sync: `
    <div style="display: flex; flex-direction: column; gap: 16px; height: 100%; justify-content: space-between;">
      <div>
        <div style="font-size: 0.8rem; font-weight: 700; color: #888; text-transform: uppercase; margin-bottom: 8px;">云端配置跨设备自动同步</div>
        <div style="background: #161922; border: 1px solid #2A2E3D; border-radius: 10px; padding: 16px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <span style="font-size: 0.85rem; font-weight: 600; color: #FFF;">专属同步密钥 (License Key)</span>
            <span style="font-size: 0.75rem; background: rgba(0, 210, 106, 0.15); color: #00D26A; padding: 2px 8px; border-radius: 4px; font-weight: 700;">🟢 云端同步已就绪</span>
          </div>
          <div style="background: #0E1015; border: 1px solid #222530; padding: 8px 12px; border-radius: 6px; font-family: var(--font-mono); font-size: 0.9rem; color: #FFAA55; display: flex; justify-content: space-between; align-items: center;">
            <span>VB-3C9E-****-****-BB34</span>
            <span style="font-size: 0.75rem; color: #777;">已保护</span>
          </div>
        </div>
      </div>

      <div style="font-size: 0.82rem; color: #888; line-height: 1.5;">
        💡 换新电脑或重装系统后，仅需输入上述密钥，所有自定义大模型 API Key、TinyPNG 账号池及词库设置秒级全量还原。
      </div>

      <div style="display: flex; gap: 10px; justify-content: flex-end; border-top: 1px solid #1F222D; padding-top: 14px;">
        <button style="background: #252936; border: 1px solid #3A3F52; color: #DDD; padding: 8px 16px; border-radius: 6px; font-size: 0.85rem; font-weight: 600; cursor: pointer;">
          拉取云端配置
        </button>
        <button style="background: linear-gradient(135deg, #FF6600, #FF4400); color: #fff; border: none; padding: 8px 16px; border-radius: 6px; font-size: 0.85rem; font-weight: 600; cursor: pointer;">
          立即手动备份
        </button>
      </div>
    </div>
  `
};

function switchMockupTab(tabKey, element) {
  document.querySelectorAll('.mockup-tab-btn').forEach(btn => btn.classList.remove('active'));
  if (element) element.classList.add('active');
  const container = document.getElementById('mockup-content-view');
  if (container && MockupViews[tabKey]) {
    container.innerHTML = MockupViews[tabKey];
  }
}

function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  if (item) {
    item.classList.toggle('active');
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.innerText = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

function copyCloneCommand() {
  const cmd = 'git clone https://github.com/haifengcy/Figma-VolcBox.git';
  if (navigator.clipboard) {
    navigator.clipboard.writeText(cmd).then(() => {
      showToast('📋 Git Clone 命令已复制到剪贴板！');
    }).catch(() => {
      fallbackCopy(cmd);
    });
  } else {
    fallbackCopy(cmd);
  }
}

function fallbackCopy(text) {
  const input = document.createElement('textarea');
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
  showToast('📋 Git Clone 命令已复制到剪贴板！');
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  switchMockupTab('translate', document.querySelector('.mockup-tab-btn'));
});
