<template>
	<view class="zhengti-container">
		<view class="header">
			<text class="title">整体认读</text>
			<text class="progress">已学习 {{ practicedCount }}/{{ pinyinList.length }}</text>
		</view>

		<view class="grid-container">
			<view
				v-for="(pinyin, index) in pinyinList"
				:key="index"
				class="pinyin-card"
				:class="{
					active: activePinyin === pinyin,
					practiced: practicedPinyin.includes(pinyin)
				}"
				@click="playAudio(pinyin)"
			>
				<text class="pinyin">{{ pinyin }}</text>
				<image class="play-icon" src="/static/icons/play.png"></image>
				<view v-if="practicedPinyin.includes(pinyin)" class="checkmark">✓</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			pinyinList: ['zhi', 'chi', 'shi', 'ri', 'zi', 'ci', 'si', 'yi', 'wu', 'yu', 'ye', 'yue', 'yuan', 'yin', 'yun', 'ying'],
			activePinyin: null,
			practicedPinyin: []
		}
	},
	computed: {
		practicedCount() {
			return this.practicedPinyin.length
		}
	},
	methods: {
		playAudio(pinyin) {
			this.activePinyin = pinyin
			const innerAudioContext = uni.createInnerAudioContext()
			innerAudioContext.src = `/static/audio/${pinyin}.mp3`
			innerAudioContext.play()
			innerAudioContext.onEnded(() => {
				this.activePinyin = null
				if (!this.practicedPinyin.includes(pinyin)) {
					this.practicedPinyin.push(pinyin)
				}
			})
		}
	}
}
</script>

<style lang="scss">
.zhengti-container {
	padding: 20px;

	.header {
		margin-bottom: 20px;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.title {
			font-size: 20px;
			font-weight: bold;
			color: #333;
		}

		.progress {
			font-size: 14px;
			color: #666;
		}
	}

	.grid-container {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 15px;

		.pinyin-card {
			background: #fff;
			border-radius: 8px;
			padding: 15px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			box-shadow: 0 2px 6px rgba(0,0,0,0.1);
			transition: all 0.2s ease;
			position: relative;

			&.active {
				transform: scale(1.05);
				box-shadow: 0 4px 12px rgba(0,0,0,0.2);
			}

			&.practiced {
				background: #f0f9eb;
			}

			.pinyin {
				font-size: 18px;
				font-weight: bold;
				color: #333;
				margin-bottom: 8px;
			}

			.play-icon {
				width: 24px;
				height: 24px;
			}

			.checkmark {
				position: absolute;
				top: 4px;
				right: 4px;
				color: #67c23a;
				font-size: 12px;
				font-weight: bold;
			}
		}
	}
}
</style>
