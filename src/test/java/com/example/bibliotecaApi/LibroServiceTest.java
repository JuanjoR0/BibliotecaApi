package com.example.bibliotecaApi;

import com.example.bibliotecaApi.repository.LibroRepository;
import com.example.bibliotecaApi.service.LibroService;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class LibroServiceTest {

    @InjectMocks
    private LibroService libroService;

    @Mock
    private LibroRepository libroRepository;
}
