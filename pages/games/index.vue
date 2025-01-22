<template>
	<view class="games-container">
		<view class="header">
			<text class="title">拼音游戏</text>
		</view>

		<view class="card-container">
			<view class="card" @click="startGame('chain')">
				<image class="icon" src="/static/tabbar/game_active.png"></image>
				<text class="label">拼音接龙</text>
				<text class="description">根据提示选择正确拼音</text>
			</view>

			<view class="card" @click="startGame('puzzle')">
				<image class="icon" src="/static/tabbar/game_active.png"></image>
				<text class="label">拼音拼图</text>
				<text class="description">组合声母和韵母</text>
			</view>

			<view class="card" @click="startGame('matching')">
				<image class="icon" src="/static/tabbar/game_active.png"></image>
				<text class="label">拼音找朋友</text>
				<text class="description">匹配拼音和图片</text>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {}
	},
	methods: {
		startGame(type) {
			uni.navigateTo({
				url: `/pages/games/${type}/index`
			})
		}
	}
}
</script>

<style lang="scss">
.games-container {
	padding: 20px;
	background: linear-gradient(135deg, #f6f9fc 0%, #eef1f5 100%);
	min-height: 100vh;

	.header {
		margin-bottom: 30px;
		padding: 20px;
		background: #fff;
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0,0,0,0.05);

		.title {
			font-size: 24px;
			font-weight: bold;
			color: #333;
			text-align: center;
		}
	}

	.card-container {
		display: flex;
		flex-direction: column;
		gap: 15px;

		.card {
			background: #fff;
			border-radius: 12px;
			padding: 20px;
			box-shadow: 0 2px 8px rgba(0,0,0,0.1);
			transition: all 0.3s ease;
			cursor: pointer;

			&:hover {
				transform: translateY(-5px);
				box-shadow: 0 4px 16px rgba(0,0,0,0.15);
			}

			.icon {
				width: 60px;
				height: 60px;
				margin-bottom: 15px;
				transition: transform 0.3s ease;
			}

			.label {
				font-size: 18px;
				color: #333;
				font-weight: 500;
				margin-bottom: 5px;
			}

			.description {
				font-size: 14px;
				color: #666;
			}
		}
	}
}
</style>
