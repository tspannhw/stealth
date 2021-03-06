
export const STYLES = {
	'align-content': {
		'val': [
			'normal', 'baseline',
			'start', 'center', 'end',
			'flex-start', 'flex-end',
			'space-around', 'space-between', 'space-evenly',
			'stretch', 'safe', 'unsafe'
		]
	},
	'align-items': {
		'val': [
			'normal', 'baseline',
			'start', 'center', 'end',
			'flex-start', 'flex-end',
			'self-start', 'self-end',
			'space-around', 'space-between', 'space-evenly',
			'stretch', 'safe', 'unsafe'
		]
	},
	'align-self': {
		'val': [
			'auto', 'normal', 'baseline',
			'center',
			'flex-start', 'flex-end',
			'self-start', 'self-end',
			'stretch', 'safe', 'unsafe'
		]
	},
	'animation-delay': {
		'typ': [ 'time' ]
	},
	'animation-direction': {
		'val': [ 'alternate', 'alternate-reverse', 'normal', 'reverse' ]
	},
	'animation-duration': {
		'typ': [ 'time' ]
	},
	'animation-fill-mode': {
		'val': [ 'backwards', 'both', 'forwards', 'none' ]
	},
	'animation-iteration-count': {
		'val': [ 'infinite' ],
		'typ': [ 'number' ]
	},
	'animation-name': {
		'typ': [ 'other', 'string' ]
	},
	'animation-timing-function': {
		'val': [
			'ease', 'ease-in', 'ease-out', 'ease-in-out',
			'linear', 'step-start', 'step-end'
		]
	},
	'animation-play-state': {
		'val': [ 'paused', 'running' ]
	},
	'backface-visibility': {
		'val': [ 'hidden', 'visible' ]
	},
	'background-attachment': {
		'val': [ 'scroll', 'fixed', 'local' ]
	},
	'background-clip': {
		'val': [ 'border-box', 'content-box', 'padding-box' ]
	},
	'background-color': {
		'typ': [ 'color' ]
	},
	'background-image': {
		'typ': [ 'url', 'gradient' ]
	},
	'background-origin': {
		'val': [ 'border-box', 'content-box', 'padding-box' ]
	},
	'background-position': {
		'val': [ 'top', 'right', 'bottom', 'left', 'center' ],
		'typ': [ 'length', 'percentage' ]
	},
	'background-repeat': {
		'val': [ 'no-repeat', 'repeat', 'repeat-x', 'repeat-y', 'round', 'space' ]
	},
	'background-size': {
		'val': [ 'contain', 'cover', 'auto' ],
		'typ': [ 'length', 'percentage' ]
	},
	'block-size': {
		'val': [ 'auto', 'available', 'border-box', 'content-box', 'fill', 'min-content', 'fit-content', 'max-content' ],
		'typ': [ 'length', 'percentage' ]
	},
	'border-collapse': {
		'val': [ 'collapse', 'separate' ]
	},
	'border-color': {
		'typ': [ 'color' ]
	},
	'border-radius': {
		'typ': [ 'length', 'percentage' ]
	},
	'border-spacing': {
		'typ': [ 'length' ]
	},
	'border-style': {
		'val': [ 'none', 'hidden', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset' ]
	},
	'border-width': {
		'val': [ 'thin', 'medium', 'thick' ],
		'typ': [ 'length' ]
	},
	'bottom': {
		'val': [ 'auto' ],
		'typ': [ 'length', 'percentage' ]
	},
	'box-sizing': {
		'val': [ 'border-box', 'content-box' ]
	},
	'break-after': {
		'val': [
			'all', 'always', 'auto',
			'avoid', 'avoid-column', 'avoid-page', 'avoid-region',
			'column', 'page', 'region',
			'left', 'right', 'recto', 'verso'
		]
	},
	'break-before': {
		'val': [
			'all', 'always', 'auto',
			'avoid', 'avoid-column', 'avoid-page', 'avoid-region',
			'column', 'page', 'region',
			'left', 'right', 'recto', 'verso'
		]
	},
	'break-inside': {
		'val': [ 'auto', 'avoid', 'avoid-column', 'avoid-page', 'avoid-region' ]
	},
	'caption-side': {
		'val': [ 'block-start', 'block-end', 'bottom', 'inline-start', 'inline-end', 'top' ]
	},
	'caret-color': {
		'val': [ 'auto' ],
		'typ': [ 'color' ]
	},
	'clear': {
		'val': [ 'both', 'inline-start', 'inline-end', 'left', 'none', 'right' ]
	},
	'color': {
		'typ': [ 'color' ]
	},
	'color-adjust': {
		'val': [ 'economy', 'exact' ]
	},
	'column-count': {
		'val': [ 'auto' ],
		'typ': [ 'number' ]
	},
	'column-fill': {
		'val': [ 'auto', 'balance', 'balance-all' ]
	},
	'column-gap': {
		'val': [ 'normal' ],
		'typ': [ 'length', 'percentage' ]
	},
	'column-span': {
		'val': [ 'all', 'none' ]
	},
	'column-width': {
		'val': [ 'auto' ],
		'typ': [ 'length' ]
	},
	'cursor': {
		'val': [
			'auto', 'default', 'none',
			'context-menu', 'help', 'pointer', 'progress', 'wait',
			'cell', 'crosshair', 'text', 'vertical-text',
			'alias', 'copy', 'move', 'no-drop', 'not-allowed', 'grab', 'grabbing',
			'all-scroll', 'col-resize', 'row-resize',
			'n-resize', 'e-resize', 's-resize', 'w-resize',
			'ne-resize', 'nw-resize', 'se-resize', 'sw-resize',
			'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize',
			'zoom-in', 'zoom-out'
		]
	},
	'direction': {
		'val': [ 'ltr', 'rtl' ]
	},
	'empty-cells': {
		'val': [ 'hide', 'show' ]
	},
	'flex-basis': {
		'val': [ 'auto', 'content', 'fit-content', 'max-content', 'min-content' ],
		'typ': [ 'length', 'percentage' ]
	},
	'flex-direction': {
		'val': [ 'column', 'column-reverse', 'row', 'row-reverse' ]
	},
	'flex-grow': {
		'typ': [ 'number' ]
	},
	'flex-shrink': {
		'typ': [ 'number' ]
	},
	'flex-wrap': {
		'val': [ 'nowrap', 'wrap', 'wrap-reverse' ]
	},
	'float': {
		'val': [ 'inline-start', 'inline-end', 'left', 'none', 'right' ]
	},
	'font-family': {
		'val': [ 'cursive', 'emoji', 'fangsong', 'fantasy', 'math', 'monospace', 'sans-serif', 'serif', 'system-ui' ],
		'typ': [ 'string' ]
	},
	'font-kerning': {
		'val': [ 'auto', 'none', 'normal' ]
	},
	'font-size': {
		'val': [
			'xx-small', 'x-small', 'small',
			'smaller', 'medium', 'larger',
			'large', 'x-large', 'xx-large',
		],
		'typ': [ 'length', 'percentage' ]
	},
	'font-size-adjust': {
		'val': [ 'none' ],
		'typ': [ 'number' ]
	},
	'font-stretch': {
		'val': [
			'normal',
			'semi-condensed', 'condensed', 'extra-condensed', 'ultra-condensed',
			'semi-expanded', 'expanded', 'extra-expanded', 'ultra-expanded'
		],
		'typ': [ 'percentage' ]
	},
	'font-style': {
		'val': [ 'italic', 'normal', 'oblique' ]
	},
	'font-weight': {
		'val': [ 'normal', 'bold', 'bolder', 'lighter' ],
		'typ': [ 'number' ]
	},
	'height': {
		'val': [ 'auto', 'available', 'border-box', 'content-box', 'fill', 'min-content', 'fit-content', 'max-content' ],
		'typ': [ 'length', 'percentage' ]
	},
	'hyphens': {
		'val': [ 'auto', 'manual', 'none' ]
	},
	'inline-size': {
		'val': [ 'auto', 'available', 'border-box', 'content-box', 'fill', 'min-content', 'fit-content', 'max-content' ],
		'typ': [ 'length', 'percentage' ]
	},
	'inset': {
		'val': [ 'auto' ],
		'typ': [ 'length', 'percentage' ]
	},
	'justify-content': {
		'val': [
			'normal', 'baseline', 'left', 'right',
			'start', 'center', 'end',
			'flex-start', 'flex-end',
			'space-around', 'space-between', 'space-evenly',
			'stretch', 'safe', 'unsafe'
		]
	},
	'justify-items': {
		'val': [
			'auto', 'normal', 'baseline', 'left', 'right',
			'start', 'center', 'end',
			'flex-start', 'flex-end',
			'self-start', 'self-end',
			'space-around', 'space-between', 'space-evenly',
			'stretch', 'safe', 'unsafe'
		]
	},
	'justify-self': {
		'val': [
			'auto', 'normal', 'baseline', 'left', 'right',
			'start', 'center', 'end',
			'flex-start', 'flex-end',
			'self-start', 'self-end',
			'space-around', 'space-between', 'space-evenly',
			'stretch', 'safe', 'unsafe'
		]
	},
	'left': {
		'val': [ 'auto' ],
		'typ': [ 'length', 'percentage' ]
	},
	'letter-spacing': {
		'val': [ 'normal' ],
		'typ': [ 'length' ]
	},
	'line-break': {
		'val': [ 'anywhere', 'auto', 'loose', 'normal', 'strict' ]
	},
	'line-height': {
		'val': [ 'normal' ],
		'typ': [ 'number', 'length', 'percentage' ]
	},
	'list-style-image': {
		'typ': [ 'url', 'gradient' ]
	},
	'list-style-position': {
		'val': [ 'inside', 'outside' ]
	},
	'list-style-type': {
		'val': [
			'circle', 'decimal', 'decimal-leading-zero', 'disc', 'square',
			'lower-alpha', 'lower-greek', 'lower-latin', 'lower-roman',
			'upper-alpha', 'upper-greek', 'upper-latin', 'upper-roman'
		]
	},
	'margin': {
		'val': [ 'auto' ],
		'typ': [ 'length', 'percentage' ]
	},
	'max-height': {
		'val': [ 'auto', 'min-content', 'fit-content', 'max-content', 'fill-available' ],
		'typ': [ 'length', 'percentage' ]
	},
	'max-width': {
		'val': [ 'auto', 'min-content', 'fit-content', 'max-content', 'fill-available' ],
		'typ': [ 'length', 'percentage' ]
	},
	'min-height': {
		'val': [ 'auto', 'min-content', 'fit-content', 'max-content', 'fill-available' ],
		'typ': [ 'length', 'percentage' ]
	},
	'min-width': {
		'val': [ 'auto', 'min-content', 'fit-content', 'max-content', 'fill-available' ],
		'typ': [ 'length', 'percentage' ]
	},
	'object-fit': {
		'val': [ 'contain', 'cover', 'fill', 'none', 'scale-down' ]
	},
	'object-position': {
		'val': [ 'top', 'right', 'bottom', 'left', 'center' ],
		'typ': [ 'length', 'percentage' ]
	},
	'opacity': {
		'typ': [ 'number', 'percentage' ]
	},
	'order': {
		'typ': [ 'number' ]
	},
	'orphans': {
		'typ': [ 'number' ]
	},
	'outline-color': {
		'typ': [ 'color' ]
	},
	'outline-offset': {
		'typ': [ 'length' ]
	},
	'outline-style': {
		'val': [ 'auto', 'none', 'dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset' ]
	},
	'outline-width': {
		'val': [ 'thin', 'medium', 'thick' ],
		'typ': [ 'length' ]
	},
	'overflow': {
		'val': [ 'auto', 'clip', 'hidden', 'scroll', 'visible' ]
	},
	'overflow-wrap': {
		'val': [ 'anywhere', 'break-word', 'normal' ]
	},
	'padding': {
		'val': [ 'auto' ],
		'typ': [ 'length', 'percentage' ]
	},
	'perspective': {
		'val': [ 'none' ],
		'typ': [ 'length' ]
	},
	'perspective-origin': {
		'val': [
			'center',
			'left', 'right',
			'bottom', 'top'
		],
		'typ': [ 'length', 'percentage' ]
	},
	'position': {
		'val': [ 'absolute', 'fixed', 'relative', 'static', 'sticky' ]
	},
	'quotes': {
		'val': [ 'auto', 'none' ],
		'typ': [ 'string' ]
	},
	'resize': {
		'val': [ 'block', 'both', 'horizontal', 'inline', 'vertical', 'none' ]
	},
	'right': {
		'val': [ 'auto' ],
		'typ': [ 'length', 'percentage' ]
	},
	'scroll-behavior': {
		'val': [ 'auto', 'smooth' ]
	},
	'scroll-margin': {
		'val': [ 'auto' ],
		'typ': [ 'length', 'percentage' ]
	},
	'scroll-padding': {
		'val': [ 'auto' ],
		'typ': [ 'length', 'percentage' ]
	},
	'scroll-snap-align': {
		'val': [ 'center', 'end', 'none', 'start' ]
	},
	'scroll-snap-stop': {
		'val': [ 'always', 'normal' ]
	},
	'scroll-snap-type': {
		'val': [
			'block', 'both', 'inline', 'none',
			'x', 'y', 'mandatory', 'proximity'
		]
	},
	'scrollbar-color': {
		'typ': [ 'color' ],
		'val': [ 'auto', 'dark', 'light' ]
	},
	'tab-size': {
		'typ': [ 'length', 'number' ]
	},
	'table-layout': {
		'val': [ 'auto', 'fixed' ]
	},
	'text-align': {
		'val': [ 'center', 'end', 'justify', 'left', 'right', 'start' ]
	},
	'text-align-last': {
		'val': [ 'auto', 'center', 'end', 'justify', 'left', 'right', 'start' ]
	},
	'text-decoration-color': {
		'typ': [ 'color' ]
	},
	'text-decoration-line': {
		'val': [ 'line-through', 'none', 'overline', 'underline' ]
	},
	'text-decoration-style': {
		'val': [ 'dashed', 'dotted', 'double', 'solid', 'wavy' ]
	},
	'text-decoration-thickness': {
		'typ': [ 'length' ],
		'val': [ 'auto', 'from-font' ]
	},
	'text-emphasis-color': {
		'typ': [ 'color' ]
	},
	'text-emphasis-style': {
		'val': [ 'circle', 'dot', 'double-circle', 'filled', 'none', 'open', 'sesame', 'triangle' ],
		'typ': [ 'string' ]
	},
	'text-indent': {
		'typ': [ 'length', 'percentage' ]
	},
	'text-justify': {
		'val': [ 'auto', 'inter-character', 'inter-word', 'none' ]
	},
	'text-orientation': {
		'val': [ 'mixed', 'sideways', 'upright', 'use-glyph-orientation' ]
	},
	'text-overflow': {
		'typ': [ 'string' ],
		'val': [ 'clip', 'ellipsis' ]
	},
	'text-rendering': {
		'val': [ 'auto', 'optimizeSpeed', 'optimizeLegibility' ]
	},
	'text-transform': {
		'val': [ 'capitalize', 'full-width', 'lowercase', 'none', 'uppercase' ]
	},
	'text-underline-offset': {
		'typ': [ 'length' ],
		'val': [ 'auto', 'from-font' ]
	},
	'top': {
		'val': [ 'auto' ],
		'typ': [ 'length', 'percentage' ]
	},
	'transform-box': {
		'val': [ 'border-box', 'fill-box', 'view-box' ]
	},
	'transform-style': {
		'val': [ 'flat', 'preserve-3d' ]
	},
	'transition-delay': {
		'typ': [ 'time' ]
	},
	'transition-duration': {
		'typ': [ 'time' ]
	},
	'transition-timing-function': {
		'val': [
			'ease', 'ease-in', 'ease-out', 'ease-in-out',
			'linear', 'step-start', 'step-end'
		]
	},
	'transition-property': {
		'val': [
			'all', 'none',
			'background', 'background-color', 'background-position', 'background-size',
			'border', 'border-color', 'border-radius', 'border-width',
			'border-top', 'border-top-color', 'border-top-left-radius', 'border-top-right-radius', 'border-top-width',
			'border-right', 'border-right-color', 'border-right-width',
			'border-bottom', 'border-bottom-color', 'border-bottom-left-radius', 'border-bottom-right-radius', 'border-bottom-width',
			'border-left', 'border-left-color', 'border-left-width',
			'top', 'right', 'bottom', 'left',
			'color', 'width', 'height',
			'column-count', 'column-gap', 'column-rule', 'column-rule-color', 'column-rule-width', 'column-width', 'columns',
			'flex', 'flex-basis', 'flex-grow', 'flex-shrink',
			'font', 'font-size', 'font-size-adjust', 'font-stretch', 'font-weight',
			'letter-spacing', 'line-height',
			'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
			'min-width', 'max-width', 'min-height', 'max-height',
			'opacity', 'order',
			'outline', 'outline-color', 'outline-offset', 'outline-width',
			'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
			'tab-size',
			'text-decoration', 'text-decoration-color',
			'text-emphasis', 'text-emphasis-color', 'text-indent',
			'visibility',
			'word-spacing',
			'z-index',
			'zoom'
		]
	},
	'unicode-bidi': {
		'val': [ 'bidi-override', 'embed', 'isolate', 'isolate-override', 'normal', 'plaintext' ]
	},
	'vertical-align': {
		'val': [ 'baseline', 'bottom', 'middle', 'sub', 'super', 'text-bottom', 'text-top', 'top' ],
		'typ': [ 'length', 'percentage' ]
	},
	'visibility': {
		'val': [ 'collapse', 'hidden', 'visible' ]
	},
	'white-space': {
		'val': [ 'break-spaces', 'no-wrap', 'normal', 'pre', 'pre-line', 'pre-wrap' ]
	},
	'width': {
		'val': [ 'auto', 'available', 'border-box', 'content-box', 'fill', 'min-content', 'fit-content', 'max-content' ],
		'typ': [ 'length', 'percentage' ]
	},
	'widows': {
		'typ': [ 'number' ]
	},
	'will-change': {
		'val': [
			'auto', 'contents', 'scroll-position',
			'background', 'background-color', 'background-position', 'background-size',
			'border', 'border-color', 'border-radius', 'border-width',
			'border-top', 'border-top-color', 'border-top-left-radius', 'border-top-right-radius', 'border-top-width',
			'border-right', 'border-right-color', 'border-right-width',
			'border-bottom', 'border-bottom-color', 'border-bottom-left-radius', 'border-bottom-right-radius', 'border-bottom-width',
			'border-left', 'border-left-color', 'border-left-width',
			'top', 'right', 'bottom', 'left',
			'color', 'width', 'height',
			'column-count', 'column-gap', 'column-rule', 'column-rule-color', 'column-rule-width', 'column-width', 'columns',
			'flex', 'flex-basis', 'flex-grow', 'flex-shrink',
			'font', 'font-size', 'font-size-adjust', 'font-stretch', 'font-weight',
			'letter-spacing', 'line-height',
			'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
			'min-width', 'max-width', 'min-height', 'max-height',
			'opacity', 'order',
			'outline', 'outline-color', 'outline-offset', 'outline-width',
			'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
			'tab-size',
			'text-decoration', 'text-decoration-color',
			'text-emphasis', 'text-emphasis-color', 'text-indent',
			'visibility',
			'word-spacing',
			'z-index',
			'zoom'
		]
	},
	'writing-mode': {
		'val': [ 'horizontal-tb', 'vertical-rl', 'vertical-lr', 'sideways-rl', 'sideways-lr' ]
	},
	'word-break': {
		'val': [ 'break-all', 'break-word', 'keep-all', 'normal' ]
	},
	'word-spacing': {
		'val': [ 'normal' ],
		'typ': [ 'length', 'percentage' ]
	},
	'z-index': {
		'val': [ 'auto' ],
		'typ': [ 'number' ]
	},
	'zoom': {
		'val': [ 'normal', 'reset' ],
		'typ': [ 'number', 'percentage' ]
	}
};


export default { STYLES };

