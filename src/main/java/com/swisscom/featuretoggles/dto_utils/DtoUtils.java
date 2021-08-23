package com.swisscom.featuretoggles.dto_utils;

import org.springframework.beans.BeanUtils;

public class DtoUtils {
    public static <T> T copyProperties(Object source, Class<T> target) throws RuntimeException {
        T obj;
        try {
            obj = target.newInstance();
        } catch (InstantiationException | IllegalAccessException e) {
            throw new RuntimeException(e);
        }
        BeanUtils.copyProperties(source, obj);
        return obj;
    }
}
