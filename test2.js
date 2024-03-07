	function updateButton() {
		v_s_h = Number(document.getElementById('s_h').value);
		v_k_h = Number(document.getElementById('k_h').value);
		v_d_h = Number(document.getElementById('d_h').value);
		
		v_s_b = Number(document.getElementById('s_b').value);
		v_k_b = Number(document.getElementById('k_b').value);
		v_d_b = Number(document.getElementById('d_b').value);
		v_b_ch = Number(document.getElementById('b_ch').value);
		
		v_s_d = Number(document.getElementById('s_d').value);
		v_k_d = Number(document.getElementById('k_d').value);
		v_d_d = Number(document.getElementById('d_d').value);
		v_d_ch = Number(document.getElementById('d_ch').value);
		
		v_level = Number(document.getElementById('level').value);
		v_d_a = Number(document.getElementById('d_a').value);
		v_a_ch = Number(document.getElementById('a_ch').value);
		v_d_c = Number(document.getElementById('d_c').value);
		v_c_ch = Number(document.getElementById('c_ch').value);
		v_d_s = Number(document.getElementById('d_s').value);
		v_s_ch = Number(document.getElementById('s_ch').value);
		
		v_a_vs_c = Number(a_vs_c.value);
		if(v_a_vs_c == 100){
			k1 = 1;
			k2 = 0;
		}else{
			k1 = v_a_vs_c / (100 - v_a_vs_c);
			k2 = 1;
		}
		
		c1 = Number(o_b.value);
		c2 = Number(o_d.value);
		
		nokori = 508 - (v_d_h + v_d_a + v_d_b + v_d_c + v_d_d + v_d_s);
		n_h = 252 - v_d_h;
		n_b = 252 - v_d_b;
		n_d = 252 - v_d_d;

		s1_list = [];
		s2_list = [];
		s3_list = [];
		s4_list = [];
		s5_list = [];
		s6_list = [];
		s7_list = [];
		newArr = [];
		
		//そのまま
		
		if(n_h < nokori){
			i_h_max = n_h;
		}else{
			i_h_max = nokori;
		}
			
		for(i_h = 0; i_h <= i_h_max; i_h++){
		
			h1 = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h - 1) / 4)) * v_level / 100);
			h2 = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h) / 4)) * v_level / 100);
			if(i_h == 0 || h1 != h2){
				nokori_a = nokori - i_h;
				if(n_b < nokori_a){
					i_b_max = n_b;
				}else{
					i_b_max = nokori_a;
				}
				
				for(i_b = 0; i_b <= i_b_max; i_b++){
				
					b1 = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b - 1) / 4)) * v_level / 100)) * v_b_ch) * c1);
					b2 = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b) / 4)) * v_level / 100)) * v_b_ch) * c1);
					if(i_b == 0 || b1 != b2){
						nokori_b = nokori_a - i_b;
						if(n_d < nokori_b){
							i_d_max = n_d;
						}else{
							i_d_max = nokori_b;
						}
						
						for(i_d = 0; i_d <= i_d_max; i_d++){
						
							d1 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d - 1) / 4)) * v_level / 100)) * v_d_ch) * c2);
							d2 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * v_d_ch) * c2);
							if(i_d == 0 || d1 != d2){
								v_z_h = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h) / 4)) * v_level / 100);
								v_z_b = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b) / 4)) * v_level / 100)) * v_b_ch)*c1);
								v_z_d = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * v_d_ch)*c2);
								s1_list.push((v_z_h * v_z_b * v_z_d / (k1*v_z_b + k2*v_z_d)).toFixed(2));
								s2_list.push(v_d_h + i_h);
								s3_list.push(v_d_b + i_b);
								s4_list.push(v_d_d + i_d);
								s5_list.push(nokori_b - i_d);
								s6_list.push(v_b_ch);
								s7_list.push(v_d_ch);
							}
					
						}
						
						if(v_d_ch == 1.0 && v_a_ch != 0.9 && v_c_ch != 0.9 && v_b_ch != 0.9 && v_s_ch != 0.9){
							for(i_d = 0; i_d <= i_d_max; i_d++){
						
								d1 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d - 1) / 4)) * v_level / 100)) * 0.9)*c2);
								d2 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * 0.9)*c2);
								if(i_d == 0 || d1 != d2){
									v_z_h = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h) / 4)) * v_level / 100);
									v_z_b = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b) / 4)) * v_level / 100)) * v_b_ch)*c1);
									v_z_d = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * 0.9)*c2);
									s1_list.push((v_z_h * v_z_b * v_z_d / (k1*v_z_b + k2*v_z_d)).toFixed(2));
									s2_list.push(v_d_h + i_h);
									s3_list.push(v_d_b + i_b);
									s4_list.push(v_d_d + i_d);
									s5_list.push(nokori_b - i_d);
									s6_list.push(v_b_ch);
									s7_list.push(0.9);
								}
					
							}
						}
						if(v_d_ch == 1.0 && v_a_ch != 1.1 && v_c_ch != 1.1 && v_b_ch != 1.1 && v_s_ch != 1.1){
							for(i_d = 0; i_d <= i_d_max; i_d++){
						
								d1 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d - 1) / 4)) * v_level / 100)) * 1.1)*c2);
								d2 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * 1.1)*c2);
								if(i_d == 0 || d1 != d2){
									v_z_h = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h) / 4)) * v_level / 100);
									v_z_b = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b) / 4)) * v_level / 100)) * v_b_ch)*c1);
									v_z_d = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * 1.1)*c2);
									s1_list.push((v_z_h * v_z_b * v_z_d / (k1*v_z_b + k2*v_z_d)).toFixed(2));
									s2_list.push(v_d_h + i_h);
									s3_list.push(v_d_b + i_b);
									s4_list.push(v_d_d + i_d);
									s5_list.push(nokori_b - i_d);
									s6_list.push(v_b_ch);
									s7_list.push(1.1);
								}
					
							}
						}
						
					}
					
				}
				
			}
					
		}
		
		//ぼうぎょup
		if(v_b_ch == 1.0 && v_a_ch != 1.1 && v_c_ch != 1.1 && v_d_ch != 1.1 && v_s_ch != 1.1){
		
			if(n_h < nokori){
				i_h_max = n_h;
			}else{
				i_h_max = nokori;
			}
			
			for(i_h = 0; i_h <= i_h_max; i_h++){
			
				h1 = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h - 1) / 4)) * v_level / 100);
				h2 = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h) / 4)) * v_level / 100);
				if(i_h == 0 || h1 != h2){
			
					nokori_a = nokori - i_h;
					if(n_b < nokori_a){
					i_b_max = n_b;
					}else{
						i_b_max = nokori_a;
					}
				
					for(i_b = 0; i_b <= i_b_max; i_b++){
					
						b1 = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b - 1) / 4)) * v_level / 100)) * 1.1)*c1);
						b2 = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b) / 4)) * v_level / 100)) * 1.1)*c1);
						if(i_b == 0 || b1 != b2){
				
							nokori_b = nokori_a - i_b;
							if(n_d < nokori_b){
								i_d_max = n_d;
							}else{
								i_d_max = nokori_b;
							}
						
							for(i_d = 0; i_d <= i_d_max; i_d++){
						
								d1 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d - 1) / 4)) * v_level / 100)) * v_d_ch)*c2);
								d2 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * v_d_ch)*c2);
								if(i_d == 0 || d1 != d2){
									v_z_h = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h) / 4)) * v_level / 100);
									v_z_b = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b) / 4)) * v_level / 100)) * 1.1)*c1);
									v_z_d = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * v_d_ch)*c2);
									s1_list.push((v_z_h * v_z_b * v_z_d / (k1*v_z_b + k2*v_z_d)).toFixed(2));
									s2_list.push(v_d_h + i_h);
									s3_list.push(v_d_b + i_b);
									s4_list.push(v_d_d + i_d);
									s5_list.push(nokori_b - i_d);
									s6_list.push(1.1);
									s7_list.push(v_d_ch);
								}
					
							}
					
							//とくぼうdown
							if(v_d_ch == 1.0 && v_a_ch != 0.9 && v_c_ch != 0.9 && v_b_ch != 0.9 && v_s_ch != 0.9){
					
								for(i_d = 0; i_d <= i_d_max; i_d++){
								
									d1 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d - 1) / 4)) * v_level / 100)) * 0.9)*c2);
									d2 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * 0.9)*c2);
									if(i_d == 0 || d1 != d2){
						
										v_z_h = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h) / 4)) * v_level / 100);
										v_z_b = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b) / 4)) * v_level / 100)) * 1.1)*c1);
										v_z_d = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * 0.9)*c2);
										s1_list.push((v_z_h * v_z_b * v_z_d / (k1*v_z_b + k2*v_z_d)).toFixed(2));
										s2_list.push(v_d_h + i_h);
										s3_list.push(v_d_b + i_b);
										s4_list.push(v_d_d + i_d);
										s5_list.push(nokori_b - i_d);
										s6_list.push(1.1);
										s7_list.push(0.9);
									}
					
								}
								
							}
							
						}
					
					}
						
				}
					
			}
			
		}
		
		//ぼうぎょdown
		if(v_b_ch == 1.0 && v_a_ch != 0.9 && v_c_ch != 0.9 && v_d_ch != 0.9 && v_s_ch != 0.9){
		
			if(n_h < nokori){
				i_h_max = n_h;
			}else{
				i_h_max = nokori;
			}
			
			for(i_h = 0; i_h <= i_h_max; i_h++){
			
				h1 = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h - 1) / 4)) * v_level / 100);
				h2 = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h) / 4)) * v_level / 100);
				if(i_h == 0 || h1 != h2){
			
					nokori_a = nokori - i_h;
					if(n_b < nokori_a){
						i_b_max = n_b;
					}else{
						i_b_max = nokori_a;
					}
				
					for(i_b = 0; i_b <= i_b_max; i_b++){
					
						b1 = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b - 1) / 4)) * v_level / 100)) * 0.9)*c1);
						b2 = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b) / 4)) * v_level / 100)) * 0.9)*c1);
						if(i_b == 0 || b1 != b2){
				
							nokori_b = nokori_a - i_b;
							if(n_d < nokori_b){
								i_d_max = n_d;
							}else{
								i_d_max = nokori_b;
							}
						
							for(i_d = 0; i_d <= i_d_max; i_d++){
							
								d1 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d - 1) / 4)) * v_level / 100)) * v_d_ch)*c2);
								d2 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * v_d_ch)*c2);
								if(i_d == 0 || d1 != d2){
						
									v_z_h = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h) / 4)) * v_level / 100);
									v_z_b = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b) / 4)) * v_level / 100)) * 0.9)*c1);
									v_z_d = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * v_d_ch)*c2);
									s1_list.push((v_z_h * v_z_b * v_z_d / (k1*v_z_b + k2*v_z_d)).toFixed(2));
									s2_list.push(v_d_h + i_h);
									s3_list.push(v_d_b + i_b);
									s4_list.push(v_d_d + i_d);
									s5_list.push(nokori_b - i_d);
									s6_list.push(0.9);
									s7_list.push(v_d_ch);
								}
					
							}
					
							//とくぼうup
							if(v_d_ch == 1.0 && v_a_ch != 1.1 && v_c_ch != 1.1 && v_b_ch != 1.1 && v_s_ch != 1.1){
					
								for(i_d = 0; i_d <= i_d_max; i_d++){
								
									d1 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d - 1) / 4)) * v_level / 100)) * 1.1)*c2);
									d2 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * 1.1)*c2);
									if(i_d == 0 || d1 != d2){
						
										v_z_h = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h) / 4)) * v_level / 100);
										v_z_b = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b) / 4)) * v_level / 100)) * 0.9)*c1);
										v_z_d = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * 1.1)*c2);
										s1_list.push((v_z_h * v_z_b * v_z_d / (k1*v_z_b + k2*v_z_d)).toFixed(2));
										s2_list.push(v_d_h + i_h);
										s3_list.push(v_d_b + i_b);
										s4_list.push(v_d_d + i_d);
										s5_list.push(nokori_b - i_d);
										s6_list.push(0.9);
										s7_list.push(1.1);
									}
								}
					
							}
							
						}
					
					}
						
				}
					
			}
		
		}
				
		newArr = Array.from(new Set(s1_list));
		big = function (a, b) {
			return b - a
		}
		newArr = newArr.sort(big);
		if(newArr.length < 9){
			i = newArr.length-1;
		}else{
			i = 9;
		}
		
		r1_list=[];
		r2_list=[];
		r3_list=[];
		r4_list=[];
		r5_list=[];
		r6_list=[];
		r7_list=[];
		big=[];
		
		for(j = 0; j <= i; j++){
			elem = newArr[j];
			idx = s1_list.indexOf(elem);
			
			r1_list.push(s1_list[idx]);
			r2_list.push(s2_list[idx]);
			r3_list.push(s3_list[idx]);
			r4_list.push(s4_list[idx]);
			r5_list.push(s5_list[idx]);
			r6_list.push(s6_list[idx]);
			r7_list.push(s7_list[idx]);
			big.push(j+1);

			for(n = 0; n>=0; n++){
				idx = s1_list.indexOf(elem,idx+1);
				if(idx == -1){
					break;
				}
				r1_list.push(s1_list[idx]);
				r2_list.push(s2_list[idx]);
				r3_list.push(s3_list[idx]);
				r4_list.push(s4_list[idx]);
				r5_list.push(s5_list[idx]);
				r6_list.push(s6_list[idx]);
				r7_list.push(s7_list[idx]);
				big.push(j+1);
				
			}
		}
		
		z_h.value = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((r2_list[0]) / 4)) * v_level / 100);
		z_b.value = Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((r3_list[0]) / 4)) * v_level / 100)) * r6_list[0]);
		z_d.value = Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((r4_list[0]) / 4)) * v_level / 100)) * r7_list[0]);
		d_h.value = r2_list[0];
		d_b.value = r3_list[0];
		d_d.value = r4_list[0];
		b_ch.value = r6_list[0].toPrecision(2);
		d_ch.value = r7_list[0].toPrecision(2);
		d_sum2.innerHTML = r3_list[0]+r2_list[0]+r4_list[0]+v_d_a+v_d_c+v_d_s;
		newArr = '<tr><th colspan="5"><font size="+1">結果</font></th><th colspan="2"><button type="button" onclick="kiero()">結果消去</button></th></tr>'
		newArr = newArr+'<tr><th width="100">順位</th><th width="100">S</th><th width="100">H実数値</br>H努力値</th><th width="100">B実数値</br>B努力値</th><th width="100">D実数値</br>D努力値</th><th width="100">性格補正</th><th width="100">残り努力値</th></tr>'
		
		i=r1_list.length;
		for(j=0;j<i;j++){
			h1 = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((r2_list[j]) / 4)) * v_level / 100);
			b1 = Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((r3_list[j]) / 4)) * v_level / 100)) * r6_list[j]);
			d1 = Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((r4_list[j]) / 4)) * v_level / 100)) * r7_list[j]);
			newArr=newArr+'<tr align="center"><td width="100">'+big[j]+'</td><td width="100">'+r1_list[j]+'</td>';
			newArr=newArr+'<td width="100">'+h1+'</br>'+r2_list[j]+'</td>';
			newArr=newArr+'<td width="100">'+b1+'</br>'+r3_list[j]+'</td>';
			newArr=newArr+'<td width="100">'+d1+'</br>'+r4_list[j]+'</td>';
			if(r6_list[j]==1.1){
				newArr=newArr+'<td width="100">ぼうぎょ</td>';
			}else if(r7_list[j]==1.1){
				newArr=newArr+'<td width="100">とくぼう</td>';
			}else if(v_a_ch==1.1){
				newArr=newArr+'<td width="100">こうげき</td>';
			}else if(v_c_ch==1.1){
				newArr=newArr+'<td width="100">とくこう</td>';
			}else if(v_s_ch==1.1){
				newArr=newArr+'<td width="100">すばやさ</td>';
			}else{
				newArr=newArr+'<td width="100">-</td>';
			}
			newArr=newArr+'<td width="100">'+r5_list[j]+'</td></tr>';
		}
		result.innerHTML=newArr;
		dame()
	}
	
	function supdateButton() {
		v_s_h = Number(document.getElementById('ss_h').value);
		v_k_h = Number(document.getElementById('sk_h').value);
		v_d_h = Number(document.getElementById('sd_h').value);
		
		v_s_b = Number(document.getElementById('ss_b').value);
		v_k_b = Number(document.getElementById('sk_b').value);
		v_d_b = Number(document.getElementById('sd_b').value);
		v_b_ch = Number(document.getElementById('sb_ch').value);
		
		v_s_d = Number(document.getElementById('ss_d').value);
		v_k_d = Number(document.getElementById('sk_d').value);
		v_d_d = Number(document.getElementById('sd_d').value);
		v_d_ch = Number(document.getElementById('sd_ch').value);
		
		v_level = Number(document.getElementById('slevel').value);
		v_d_a = Number(document.getElementById('sd_a').value);
		v_a_ch = Number(document.getElementById('sa_ch').value);
		v_d_c = Number(document.getElementById('sd_c').value);
		v_c_ch = Number(document.getElementById('sc_ch').value);
		v_d_s = Number(document.getElementById('sd_s').value);
		v_s_ch = Number(document.getElementById('ss_ch').value);
		
		v_a_vs_c = Number(sa_vs_c.value);
		if(v_a_vs_c == 100){
			k1 = 1;
			k2 = 0;
		}else{
			k1 = v_a_vs_c / (100 - v_a_vs_c);
			k2 = 1;
		}
		
		c1 = Number(so_b.value);
		c2 = Number(so_d.value);
		
		nokori = 508 - (v_d_h + v_d_a + v_d_b + v_d_c + v_d_d + v_d_s);
		n_h = 252 - v_d_h;
		n_b = 252 - v_d_b;
		n_d = 252 - v_d_d;

		s1_list = [];
		s2_list = [];
		s3_list = [];
		s4_list = [];
		s5_list = [];
		s6_list = [];
		s7_list = [];
		newArr = [];
		
		//そのまま
		
		if(n_h < nokori){
			i_h_max = n_h;
		}else{
			i_h_max = nokori;
		}
			
		for(i_h = 0; i_h <= i_h_max; i_h++){
		
			h1 = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h - 1) / 4)) * v_level / 100);
			h2 = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h) / 4)) * v_level / 100);
			if(i_h == 0 || h1 != h2){
				nokori_a = nokori - i_h;
				if(n_b < nokori_a){
					i_b_max = n_b;
				}else{
					i_b_max = nokori_a;
				}
				
				for(i_b = 0; i_b <= i_b_max; i_b++){
				
					b1 = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b - 1) / 4)) * v_level / 100)) * v_b_ch) * c1);
					b2 = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b) / 4)) * v_level / 100)) * v_b_ch) * c1);
					if(i_b == 0 || b1 != b2){
						nokori_b = nokori_a - i_b;
						if(n_d < nokori_b){
							i_d_max = n_d;
						}else{
							i_d_max = nokori_b;
						}
						
						for(i_d = 0; i_d <= i_d_max; i_d++){
						
							d1 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d - 1) / 4)) * v_level / 100)) * v_d_ch) * c2);
							d2 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * v_d_ch) * c2);
							if(i_d == 0 || d1 != d2){
								v_z_h = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h) / 4)) * v_level / 100);
								v_z_b = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b) / 4)) * v_level / 100)) * v_b_ch)*c1);
								v_z_d = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * v_d_ch)*c2);
								s1_list.push((v_z_h * v_z_b * v_z_d / (k1*v_z_b + k2*v_z_d)).toFixed(2));
								s2_list.push(v_d_h + i_h);
								s3_list.push(v_d_b + i_b);
								s4_list.push(v_d_d + i_d);
								s5_list.push(nokori_b - i_d);
								s6_list.push(v_b_ch);
								s7_list.push(v_d_ch);
							}
					
						}
						
						if(v_d_ch == 1.0 && v_a_ch != 0.9 && v_c_ch != 0.9 && v_b_ch != 0.9 && v_s_ch != 0.9){
							for(i_d = 0; i_d <= i_d_max; i_d++){
						
								d1 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d - 1) / 4)) * v_level / 100)) * 0.9)*c2);
								d2 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * 0.9)*c2);
								if(i_d == 0 || d1 != d2){
									v_z_h = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h) / 4)) * v_level / 100);
									v_z_b = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b) / 4)) * v_level / 100)) * v_b_ch)*c1);
									v_z_d = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * 0.9)*c2);
									s1_list.push((v_z_h * v_z_b * v_z_d / (k1*v_z_b + k2*v_z_d)).toFixed(2));
									s2_list.push(v_d_h + i_h);
									s3_list.push(v_d_b + i_b);
									s4_list.push(v_d_d + i_d);
									s5_list.push(nokori_b - i_d);
									s6_list.push(v_b_ch);
									s7_list.push(0.9);
								}
					
							}
						}
						if(v_d_ch == 1.0 && v_a_ch != 1.1 && v_c_ch != 1.1 && v_b_ch != 1.1 && v_s_ch != 1.1){
							for(i_d = 0; i_d <= i_d_max; i_d++){
						
								d1 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d - 1) / 4)) * v_level / 100)) * 1.1)*c2);
								d2 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * 1.1)*c2);
								if(i_d == 0 || d1 != d2){
									v_z_h = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h) / 4)) * v_level / 100);
									v_z_b = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b) / 4)) * v_level / 100)) * v_b_ch)*c1);
									v_z_d = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * 1.1)*c2);
									s1_list.push((v_z_h * v_z_b * v_z_d / (k1*v_z_b + k2*v_z_d)).toFixed(2));
									s2_list.push(v_d_h + i_h);
									s3_list.push(v_d_b + i_b);
									s4_list.push(v_d_d + i_d);
									s5_list.push(nokori_b - i_d);
									s6_list.push(v_b_ch);
									s7_list.push(1.1);
								}
					
							}
						}
						
					}
					
				}
				
			}
					
		}
		
		//ぼうぎょup
		if(v_b_ch == 1.0 && v_a_ch != 1.1 && v_c_ch != 1.1 && v_d_ch != 1.1 && v_s_ch != 1.1){
		
			if(n_h < nokori){
				i_h_max = n_h;
			}else{
				i_h_max = nokori;
			}
			
			for(i_h = 0; i_h <= i_h_max; i_h++){
			
				h1 = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h - 1) / 4)) * v_level / 100);
				h2 = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h) / 4)) * v_level / 100);
				if(i_h == 0 || h1 != h2){
			
					nokori_a = nokori - i_h;
					if(n_b < nokori_a){
					i_b_max = n_b;
					}else{
						i_b_max = nokori_a;
					}
				
					for(i_b = 0; i_b <= i_b_max; i_b++){
					
						b1 = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b - 1) / 4)) * v_level / 100)) * 1.1)*c1);
						b2 = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b) / 4)) * v_level / 100)) * 1.1)*c1);
						if(i_b == 0 || b1 != b2){
				
							nokori_b = nokori_a - i_b;
							if(n_d < nokori_b){
								i_d_max = n_d;
							}else{
								i_d_max = nokori_b;
							}
						
							for(i_d = 0; i_d <= i_d_max; i_d++){
						
								d1 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d - 1) / 4)) * v_level / 100)) * v_d_ch)*c2);
								d2 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * v_d_ch)*c2);
								if(i_d == 0 || d1 != d2){
									v_z_h = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h) / 4)) * v_level / 100);
									v_z_b = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b) / 4)) * v_level / 100)) * 1.1)*c1);
									v_z_d = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * v_d_ch)*c2);
									s1_list.push((v_z_h * v_z_b * v_z_d / (k1*v_z_b + k2*v_z_d)).toFixed(2));
									s2_list.push(v_d_h + i_h);
									s3_list.push(v_d_b + i_b);
									s4_list.push(v_d_d + i_d);
									s5_list.push(nokori_b - i_d);
									s6_list.push(1.1);
									s7_list.push(v_d_ch);
								}
					
							}
					
							//とくぼうdown
							if(v_d_ch == 1.0 && v_a_ch != 0.9 && v_c_ch != 0.9 && v_b_ch != 0.9 && v_s_ch != 0.9){
					
								for(i_d = 0; i_d <= i_d_max; i_d++){
								
									d1 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d - 1) / 4)) * v_level / 100)) * 0.9)*c2);
									d2 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * 0.9)*c2);
									if(i_d == 0 || d1 != d2){
						
										v_z_h = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h) / 4)) * v_level / 100);
										v_z_b = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b) / 4)) * v_level / 100)) * 1.1)*c1);
										v_z_d = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * 0.9)*c2);
										s1_list.push((v_z_h * v_z_b * v_z_d / (k1*v_z_b + k2*v_z_d)).toFixed(2));
										s2_list.push(v_d_h + i_h);
										s3_list.push(v_d_b + i_b);
										s4_list.push(v_d_d + i_d);
										s5_list.push(nokori_b - i_d);
										s6_list.push(1.1);
										s7_list.push(0.9);
									}
					
								}
								
							}
							
						}
					
					}
						
				}
					
			}
			
		}
		
		//ぼうぎょdown
		if(v_b_ch == 1.0 && v_a_ch != 0.9 && v_c_ch != 0.9 && v_d_ch != 0.9 && v_s_ch != 0.9){
		
			if(n_h < nokori){
				i_h_max = n_h;
			}else{
				i_h_max = nokori;
			}
			
			for(i_h = 0; i_h <= i_h_max; i_h++){
			
				h1 = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h - 1) / 4)) * v_level / 100);
				h2 = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h) / 4)) * v_level / 100);
				if(i_h == 0 || h1 != h2){
			
					nokori_a = nokori - i_h;
					if(n_b < nokori_a){
						i_b_max = n_b;
					}else{
						i_b_max = nokori_a;
					}
				
					for(i_b = 0; i_b <= i_b_max; i_b++){
					
						b1 = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b - 1) / 4)) * v_level / 100)) * 0.9)*c1);
						b2 = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b) / 4)) * v_level / 100)) * 0.9)*c1);
						if(i_b == 0 || b1 != b2){
				
							nokori_b = nokori_a - i_b;
							if(n_d < nokori_b){
								i_d_max = n_d;
							}else{
								i_d_max = nokori_b;
							}
						
							for(i_d = 0; i_d <= i_d_max; i_d++){
							
								d1 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d - 1) / 4)) * v_level / 100)) * v_d_ch)*c2);
								d2 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * v_d_ch)*c2);
								if(i_d == 0 || d1 != d2){
						
									v_z_h = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h) / 4)) * v_level / 100);
									v_z_b = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b) / 4)) * v_level / 100)) * 0.9)*c1);
									v_z_d = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * v_d_ch)*c2);
									s1_list.push((v_z_h * v_z_b * v_z_d / (k1*v_z_b + k2*v_z_d)).toFixed(2));
									s2_list.push(v_d_h + i_h);
									s3_list.push(v_d_b + i_b);
									s4_list.push(v_d_d + i_d);
									s5_list.push(nokori_b - i_d);
									s6_list.push(0.9);
									s7_list.push(v_d_ch);
								}
					
							}
					
							//とくぼうup
							if(v_d_ch == 1.0 && v_a_ch != 1.1 && v_c_ch != 1.1 && v_b_ch != 1.1 && v_s_ch != 1.1){
					
								for(i_d = 0; i_d <= i_d_max; i_d++){
								
									d1 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d - 1) / 4)) * v_level / 100)) * 1.1)*c2);
									d2 = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * 1.1)*c2);
									if(i_d == 0 || d1 != d2){
						
										v_z_h = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((v_d_h + i_h) / 4)) * v_level / 100);
										v_z_b = Math.floor(Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((v_d_b + i_b) / 4)) * v_level / 100)) * 0.9)*c1);
										v_z_d = Math.floor(Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((v_d_d + i_d) / 4)) * v_level / 100)) * 1.1)*c2);
										s1_list.push((v_z_h * v_z_b * v_z_d / (k1*v_z_b + k2*v_z_d)).toFixed(2));
										s2_list.push(v_d_h + i_h);
										s3_list.push(v_d_b + i_b);
										s4_list.push(v_d_d + i_d);
										s5_list.push(nokori_b - i_d);
										s6_list.push(0.9);
										s7_list.push(1.1);
									}
								}
					
							}
							
						}
					
					}
						
				}
					
			}
		
		}
				
		newArr = Array.from(new Set(s1_list));
		big = function (a, b) {
			return b - a
		}
		newArr = newArr.sort(big);
		if(newArr.length < 9){
			i = newArr.length-1;
		}else{
			i = 9;
		}
		
		r1_list=[];
		r2_list=[];
		r3_list=[];
		r4_list=[];
		r5_list=[];
		r6_list=[];
		r7_list=[];
		big=[];
		
		for(j = 0; j <= i; j++){
			elem = newArr[j];
			idx = s1_list.indexOf(elem);
			
			r1_list.push(s1_list[idx]);
			r2_list.push(s2_list[idx]);
			r3_list.push(s3_list[idx]);
			r4_list.push(s4_list[idx]);
			r5_list.push(s5_list[idx]);
			r6_list.push(s6_list[idx]);
			r7_list.push(s7_list[idx]);
			big.push(j+1);

			for(n = 0; n>=0; n++){
				idx = s1_list.indexOf(elem,idx+1);
				if(idx == -1){
					break;
				}
				r1_list.push(s1_list[idx]);
				r2_list.push(s2_list[idx]);
				r3_list.push(s3_list[idx]);
				r4_list.push(s4_list[idx]);
				r5_list.push(s5_list[idx]);
				r6_list.push(s6_list[idx]);
				r7_list.push(s7_list[idx]);
				big.push(j+1);
				
			}
		}
		
		sz_h.value = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((r2_list[0]) / 4)) * v_level / 100);
		sz_b.value = Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((r3_list[0]) / 4)) * v_level / 100)) * r6_list[0]);
		sz_d.value = Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((r4_list[0]) / 4)) * v_level / 100)) * r7_list[0]);
		sd_h.value = r2_list[0];
		sd_b.value = r3_list[0];
		sd_d.value = r4_list[0];
		sb_ch.value = r6_list[0].toPrecision(2);
		sd_ch.value = r7_list[0].toPrecision(2);
		sd_sum2.innerHTML = r3_list[0]+r2_list[0]+r4_list[0]+v_d_a+v_d_c+v_d_s;
		newArr = '<tr><th colspan="5"><font size="+1">結果</font></th><th colspan="2"><button type="button" onclick="skiero()">結果消去</button></th></tr>'
		newArr = newArr+'<tr><th width="100">順位</th><th width="100">S</th><th width="100">H実数値</br>H努力値</th><th width="100">B実数値</br>B努力値</th><th width="100">D実数値</br>D努力値</th><th width="100">性格補正</th><th width="100">残り努力値</th></tr>'
		
		i=r1_list.length;
		for(j=0;j<i;j++){
			h1 = 10 + v_level + Math.floor(( v_s_h * 2 + v_k_h + Math.floor((r2_list[j]) / 4)) * v_level / 100);
			b1 = Math.floor((5 + Math.floor((v_s_b * 2 + v_k_b + Math.floor((r3_list[j]) / 4)) * v_level / 100)) * r6_list[j]);
			d1 = Math.floor((5 + Math.floor((v_s_d * 2 + v_k_d + Math.floor((r4_list[j]) / 4)) * v_level / 100)) * r7_list[j]);
			newArr=newArr+'<tr align="center"><td width="100">'+big[j]+'</td><td width="100">'+r1_list[j]+'</td>';
			newArr=newArr+'<td width="100">'+h1+'</br>'+r2_list[j]+'</td>';
			newArr=newArr+'<td width="100">'+b1+'</br>'+r3_list[j]+'</td>';
			newArr=newArr+'<td width="100">'+d1+'</br>'+r4_list[j]+'</td>';
			if(r6_list[j]==1.1){
				newArr=newArr+'<td width="100">ぼうぎょ</td>';
			}else if(r7_list[j]==1.1){
				newArr=newArr+'<td width="100">とくぼう</td>';
			}else if(v_a_ch==1.1){
				newArr=newArr+'<td width="100">こうげき</td>';
			}else if(v_c_ch==1.1){
				newArr=newArr+'<td width="100">とくこう</td>';
			}else if(v_s_ch==1.1){
				newArr=newArr+'<td width="100">すばやさ</td>';
			}else{
				newArr=newArr+'<td width="100">-</td>';
			}
			newArr=newArr+'<td width="100">'+r5_list[j]+'</td></tr>';
		}
		sresult.innerHTML=newArr;
		dame()
	}