json.(@message, :content, :image)
json.name @message.user.name
json.created_at @message.created_at.strftime("%Y年%m月%d日 %H時%M分")
json.id @message.id