        function handleChat() {
            document.getElementsByClassName("privateChatContent")[0].classList.remove("hidden");
            document.getElementById("privateSendBtn").addEventListener("click", (evt) => {
            socket.emit('newPrivateMessage', {message: document.getElementById("privateMsgText").value, to: document.getElementsByClassName("userSelected")[0].innerHTML});
            document.getElementById("privateChatMessages").innerHTML+=`<li>${document.getElementById("nickText").value}: ${document.getElementById("privateMsgText").value}`;
            })
        }
        let btn = document.getElementById('btnSend');
        btn.addEventListener('click', (evt) => {
            socket.emit('register',document.getElementById("nickText").value);
        });
        socket.on('registerStatus', (data) => {
            if (data.status === "success") {
                document.getElementsByClassName("chatContent")[0].classList.remove("hidden");
                document.getElementsByClassName("mainContent")[0].classList.add("hidden");
                document.getElementById("sendBtn").addEventListener("click", (evt) => {
                    socket.emit('newMessage', {text: document.getElementById("msgText").value});
                })
                socket.on("gotNewMessage", (data) => {
                    
                    document.getElementById("chatMessages").innerHTML+=`<li>${data.username} wrote ${data.text} at ${moment().format("HH:mm:ss")}</li>`;
                })
            }
        })
        socket.on("userList", (data) => {
            const ulElement = document.getElementById("chatUsers");
            ulElement.innerHTML="";
            data.usernames.forEach(u=> {
                if (u === document.getElementById("nickText").value) {
                    chatUsers.innerHTML+=`<div class='myself'>${u}</div>`;
                } else {
                    chatUsers.innerHTML+=`<div class='user'>${u}</div>`;    
                }
                
            });
            const users = document.getElementsByClassName("user");
            for(var i=0; i< users.length;i++) {
                users[i].addEventListener("click", (evt) => {
                    if (evt.currentTarget.classList.contains("userSelected")) {
                        evt.currentTarget.classList.remove("userSelected");
                        document.getElementsByClassName("privateChatToolbar")[0].classList.add("hidden");
                        document.getElementsByClassName("privateChatContent")[0].classList.add("hidden");
                        document.getElementById("btnChat").removeEventListener("click", handleChat, true)
                    } else {
                        const remove = document.getElementsByClassName("userSelected");
                        if (remove.length > 0) {
                            document.getElementsByClassName("userSelected")[0].classList.remove("userSelected");
                            document.getElementById("btnChat").removeEventListener("click", handleChat, true)
                            
                        }
                        
                        evt.currentTarget.classList.add("userSelected");
                        document.getElementsByClassName("privateChatToolbar")[0].classList.remove("hidden");
                        document.getElementById("btnChat").addEventListener("click", handleChat, true)
                    }
                });

            }
        })
        socket.on("newPrivateMessageRecieved", (data) => {
            if(document.getElementsByClassName("privateChatContent")[0].classList.contains("hidden")) {
                document.getElementsByClassName("privateChatContent")[0].classList.remove("hidden");
            }
            document.getElementById("privateChatMessages").innerHTML+=`<li>${data.from}: ${data.text}</li>`;
        });