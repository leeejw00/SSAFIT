package com.ssafy.ssafit.model.dao;

import java.util.List;

import com.ssafy.ssafit.model.dto.MyPage;
import com.ssafy.ssafit.model.dto.User;

public interface UserDao {
	
	List<User> selectAll();
	
	int insertUser(User user);
	
	User selectOne(String id);
	
//	User selectById(int id);
	
	int updateUser(User user);
	
	int insertMyPage(MyPage mypage);
	
	MyPage getMyPageUser(int id);
	
	User getMyUser(int id);

	int isRegist(int id);

	int updateMyPage(MyPage mypage);
	
}
